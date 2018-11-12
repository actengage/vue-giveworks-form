<template>

    <div v-else class="form-group" :class="{'was-validated': !!errors.token}">

        <div v-if="!loaded" class="row my-5 py-1">
            <div class="col-xs-12">
                <activity-indicator size="sm" :center="true"/>
            </div>
        </div>

        <label v-else class="d-block mt-3">
            <div class="text-bold mb-2">Credit Card</div>
            <div class="stripe-field" :class="{'has-activity': activity}">
                <div class="form-control p-2" :class="{'is-invalid': !!errors.token}">
                    <div class="stripe-field-input"/>
                </div>
                <div class="stripe-field-activity">
                    <activity-indicator size="xs" center/>
                </div>
            </div>
            <div class="invalid-feedback" v-if="errors.token" v-html="errors.token.join('<br>')"/>
        </label>
    </div>

</template>

<script>
import Gateway from '../Gateway';
import wait from 'vue-interface/src/Helpers/Wait';
import elapsed from 'vue-interface/src/Helpers/Elapsed';
import ActivityIndicator from 'vue-interface/src/Components/ActivityIndicator';

export default {

    name: 'stripe-credit-card',

    components: {
        ActivityIndicator
    },

    props: {
        page: {
            type: Object,
            required: true
        },
        form: {
            type: Object,
            required: true
        },
        errors: {
            type: Object,
            required: true
        },
        gateway: {
            type: Object,
            required: true
        },
        hidePostalCode: {
            type: Boolean,
            default: false
        }
    },

    created() {
        /*
        this.$submitEvent = this.$dispatch.on('form:submit', (data) => {
            this.$card.blur();
        });
        */
    },

    beforeDestroy() {
        // this.$dispatch.off(this.$submitEvent);
    },

    mounted() {
        const gateway = Gateway(this.gateway);

        // this.$dispatch.request('submit:disable');

        gateway.script((event) => {
            try {
                this.$card = gateway.card({
                    hidePostalCode: this.hidePostalCode,
                    value: {
                        postalCode: this.form.zip
                    }
                });
            }
            catch (e) {
                // this.$dispatch.emit('error', e);
                throw e;
            }

            this.$card.addEventListener('change', (event) => {
                this.errors.token = event.error ? [event.error.message] : null;

                if(event.complete) {
                    elapsed(500, (resolve, reject) => {
                        gateway.createToken(this.$card, {
                            currency: 'usd'
                        }).then((result) => {
                            wait(this.activity ? 750 : 0, (resolve, reject) => {
                                if(result.error) {
                                    reject(this.errors.token = [event.error.message]);
                                }
                                else {
                                    this.form.token = result.token.id;
                                    // this.$dispatch.request('submit:enable');
                                    resolve(result);
                                }
                            }).then(resolve, reject);
                        });
                    }, () => {
                        this.activity = true;
                    }).then(() => {
                        this.activity = false;
                    }, () => {
                        this.activity = false;
                    });
                }
            });

            this.loaded = true;
            this.$nextTick(() => this.$card.mount(this.$el.querySelector('.stripe-field-input')));
        });
    },

    data() {
        return {
            activity: false,
            loaded: false
        };
    }

};
</script>

<style lang="scss">
.stripe-field {
    position: relative;

    .form-control {
        width: 100%;
        transition: all .15s ease-in-out;
    }

    .stripe-field-activity {
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        height: 100%;
        width: 35px;
        transition: all .15s ease-in-out;
    }

    &.has-activity {
        .form-control {
            width: calc(100% - 35px);
        }
        .stripe-field-activity {
            opacity: 1;
        }
    }
}
</style>
