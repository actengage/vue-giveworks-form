<template>

    <div>
        <div v-if="!loaded || submitting" class="row my-5 py-1">
            <div class="col-xs-12">
                <activity-indicator size="sm" :center="true"></activity-indicator>
            </div>
        </div>
        <div v-else>
            <div v-if="error" class="alert alert-danger">
                <div class="row">
                    <div class="col-sm-2">
                        <icon name="warning" scale="2.5" class="float-left mt-2"></icon>
                    </div>
                    <div class="col-sm-10" v-html="error"></div>
                </div>
            </div>
            <div v-else-if="form.payerId && form.paymentId" class="alert alert-success">
                <div class="row">
                    <div class="col-sm-2">
                        <icon name="check-circle" scale="2.5" class="float-left mt-2"></icon>
                    </div>
                    <div class="col-sm-10">
                        Your PayPal payment information has been collected and is ready to be processed. <a href="#" @click="removePaymentInfo($event)">Cancel Payment</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="paypal-payment-button mt-2 mb-4" :class="{'disabled': disabled, 'd-none': submitting}"></div>
    </div>

</template>

<script>
import 'vue-awesome/icons/exclamation-triangle';
import 'vue-awesome/icons/check-circle';
import Gateway from '@/Components/Gateways/Gateway';
import Icon from 'vue-awesome/components/Icon';
//import ActivityIndicator from '@/Components/ActivityIndicators/ActivityIndicator';

export default {

    name: 'paypal-payment-button',

    components: {
        Icon,
        //ActivityIndicator
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
        }
    },

    data() {
        return {
            loaded: false,
            submitting: false,
            disabled: !this.form.amount
        };
    },

    methods: {
        hasError() {
            return this.errors.payerId || this.errors.paymentId;
        },
        shouldMountButton() {
            return this.$el.querySelector('.paypal-payment-button') && !this.$el.querySelector('.paypal-payment-button iframe');
        },
        hasPaymentInfo() {
            return this.form.amount && (this.form.recurring === 1 || this.form.payerId && this.form.paymentId);
        },
        removePaymentInfo(event) {
            this.$set(this.form, 'payerId', null);
            this.$set(this.form, 'paymentId', null);
            this.$set(this.errors, 'payerId', null);
            this.$set(this.errors, 'paymentId', null);
            this.$dispatch.request('paypal:enable');
            event.preventDefault();
        }
    },

    computed: {
        error: function() {
            const errors = [];

            if(this.errors.payerId){
                errors.push(this.errors.payerId.join('<b>'));
            }

            if(this.errors.paymentId){
                errors.push(this.errors.paymentId.join('<b>'));
            }

            return errors.length ? errors.join('<br>') : false;
        }
    },

    updated() {
        if(this.shouldMountButton()) {
            const button = Gateway(this.gateway).button('.paypal-payment-button', this.$dispatch);

            this.$dispatch.on('paypal:click', data => {
                if(this.hasPaymentInfo()) {
                    this.$dispatch.request('form:submit');
                }
            });

            this.$dispatch.on('paypal:validate', actions => {
                if(this.form.recurring) {
                    actions.disable();
                }

                if(this.$unwatchAmount) {
                    this.$unwatchAmount();
                }

                this.$unwatchAmount = this.$watch('form.amount', value => {
                    this.disabled = !(button.amount = value);
                    actions[!this.form.recurring && value ? 'enable' : 'disable']();
                });

                if(this.$unwatchRecurring) {
                    this.$unwatchRecurrin();
                }

                this.$unwatchRecurring = this.$watch('form.recurring', value => {
                    if(value) {
                        actions.disable();
                    }
                    else if(this.form.amount) {
                        actions.enable();
                    }
                });
            });

            this.$dispatch.on('paypal:authorize', (data, actions) => {
                this.form.payerId = data.payerID;
                this.form.paymentId = data.paymentID;
                this.$dispatch.request('form:submit');
                this.$dispatch.request('paypal:disable');
            });
        }
    },

    beforeCreate() {
        this.$prevFormSubmitReply = this.$dispatch.getReply('form:submit');

        this.$dispatch.reply('form:submit', (resolve, reject) => {
            if(this.hasPaymentInfo()) {
                this.$prevFormSubmitReply.handle(response => {
                    if(response.data.recur) {
                        this.$dispatch.request('form:redirect', response.data.meta.redirect_url);
                    }
                    else {
                        resolve(response);
                    }
                }, error => {
                    reject(error);
                });
            }
        });

        this.$submitEvent = this.$dispatch.on('form:submit', data => {
            this.submitting = true;
        });

        this.$submitCompleteEvent = this.$dispatch.on('form:submit:error', response => {
            this.submitting = false;
        });
    },

    mounted() {
        this.$dispatch.request('submit:hide');

        Gateway(this.gateway).script((event) => {
            this.loaded = true;
        });
    },

    beforeDestroy() {
        this.$unwatchAmount();
        this.$unwatchRecurring();
        this.$dispatch.request('submit:show');
        this.$dispatch.off('paypal:authorize');
        this.$dispatch.off(this.$submitEvent);
        this.$dispatch.off(this.$submitCompleteEvent);
        this.$dispatch.setReply(this.$prevFormSubmitReply);
    }

}
</script>

<style>
.paypal-payment-button.disabled,
.paypal-payment-button:disabled {
    opacity: .5;
}
</style>