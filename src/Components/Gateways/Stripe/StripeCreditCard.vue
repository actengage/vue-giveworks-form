<template>

    <div class="form-group" :class="{'was-validated': !!errors.token}">
        <label class="d-block mt-3">
            <div class="text-bold mb-2">Credit Card</div>
            <div class="stripe-field" :class="{'activity': isLoading}">
                <div class="form-control p-2" :class="{'is-invalid': !!errors.token}">
                    <div class="stripe-field-input"></div>
                </div>
                <div class="stripe-field-activity">
                    <activity-indicator size="xs" center/>
                </div>
            </div>
            <div class="invalid-feedback" v-if="errors.token" v-html="errors.token.join('<br>')"></div>
        </label>
    </div>

</template>

<script>
import Gateway from '@/Components/Gateways/Gateway';
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
        this.$submitEvent = this.$dispatch.on('form:submit', (data) => {
            this.$card.blur();
        });
    },

    beforeDestroy() {
        this.$dispatch.off(this.$submitEvent);
    },

    mounted() {
        const gateway = Gateway(this.gateway);

        this.$dispatch.request('submit:disable');

        gateway.script((event) => {
            try {
                this.$card = gateway.card({
                    hidePostalCode: this.hidePostalCode,
                    value: {
                        postalCode: this.form.zip
                    }
                });
            }
            catch(e) {
                this.$dispatch.emit('error', e);
                throw e;
            }

            this.$card.addEventListener('change', (event) => {
                this.errors.token = event.error ? [event.error.message] : null;

                if(event.complete) {
                    // this.isLoading = true;

                    gateway.createToken(this.$card, {
                        currency: 'usd'
                    }).then((result) => {
                        // this.isLoading = false;

                        if (result.error) {
                            this.errors.token = [event.error.message];
                        } else {
                            this.form.token = result.token.id;
                            this.$dispatch.request('submit:enable');
                        }
                    });
                }
            });

            this.$card.mount(this.$el.querySelector('.stripe-field-input'));
        });
    },

    data() {
        return {
            isLoading: false
        }
    }

}
</script>

<style lang="scss">
.stripe-field {
    position: relative;

    .form-control {
        width: 100%;
        transition: all .33s ease-in-out;
    }

    .stripe-field-activity {
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        height: 100%;
        width: 35px;
        transition: all .33s ease-in-out;
    }

    &.activity {
        .form-control {
            width: calc(100% - 35px);
        }
        .stripe-field-activity {
            opacity: 1;
        }
    }
}
</style>
