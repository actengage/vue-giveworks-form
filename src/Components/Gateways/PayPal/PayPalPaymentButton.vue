<template>
    <div>
        <div v-if="!loaded || submitting" class="row my-5 py-1">
            <div class="col-xs-12">
                <activity-indicator size="sm" :center="true"/>
            </div>
        </div>
        <div v-else>
            <alert v-if="error" variant="danger" class="d-flex align-items-center">
                <icon icon="exclamation-triangle" size="2x" class="mr-2"/>
                <div v-html="error"/>
            </alert>
            <alert v-else-if="form.payerId && form.paymentId" variant="success" class="d-flex align-items-center">
                <icon :icon="['far', 'check-circle']" size="2x" class="mr-2"/>
                <div>Your PayPal payment information has been collected and is ready to be processed. <a href="#" @click.prevent="removePaymentInfo($event)">Cancel Payment</a></div>
            </alert>
        </div>

        <div class="paypal-payment-button mt-2 mb-4" :class="{'disabled': disabled, 'd-none': submitting}"/>
    </div>
</template>

<script>
import Gateway from '../Gateway';
import PaymentGateway from '../../../Mixins/PaymentGateway';

function handleDisabledState(disable) {
    if(this.actions && !!disable) {
        this.actions.disable();
    }
    else if(this.actions && !disable) {
        this.actions.enable();
    }
}

export default {

    name: 'paypal-payment-button',

    mixins: [
        PaymentGateway
    ],

    watch: {
        'form.recurring': function(value) {
            this.disabled = /*! !value || */!this.form.amount;
        },
        'form.amount': function(value) {
            this.disabled = !(this.button.amount = value);// || !!this.form.recurring;
        },
        'form.paymentId': function(value) {
            handleDisabledState.call(this, this.hasPaymentInfo());
        },
        'form.payerId': function(value) {
            handleDisabledState.call(this, this.hasPaymentInfo());
        },
        disabled: function(value) {
            handleDisabledState.call(this, !!value || this.hasPaymentInfo());
        }
    },

    methods: {

        hasError() {
            return this.errors.payerId || this.errors.paymentId;
        },

        hasPaymentInfo() {
            return !!this.form.amount && (this.form.recurring === 1 || !!(
                this.form.payerId && this.form.paymentId
            ));
        },

        removePaymentInfo(event) {
            this.enable();
            this.$set(this.form, 'payerId', null);
            this.$set(this.form, 'paymentId', null);
            this.$set(this.errors, 'payerId', null);
            this.$set(this.errors, 'paymentId', null);
        },

        shouldMountButton() {
            return this.$el.querySelector('.paypal-payment-button') && !this.$el.querySelector('.paypal-payment-button iframe');
        },

        onSubmitError() {
            this.disabled = !this.form.amount;
        },

        onSubmitSuccess(model) {
            // this.disabled = false;

            if(model.get('recur')) {
                window.location = model.get('meta').redirect_url;
            }
        },

        onPaypalValidate(actions) {
            this.actions = actions;
            this.enable = actions.enable;
            this.disable = actions.disable;

            if(this.form.amount) {
                actions.enable();
            }
            else {
                actions.disable();
            }

            return !!this.form.amount;
        },

        onPaypalClick() {
            if(this.hasPaymentInfo()) {
                this.disabled = true;
                this.pageType.submit().then(
                    this.pageType.onSubmitSuccess,
                    this.pageType.onSubmitError
                ).then(
                    this.onSubmitSuccess,
                    this.onSubmitError
                );
            }
        },

        onPaypalAuthorize(data) {
            if(!this.hasPaymentInfo()) {
                this.$set(this.form, 'payerId', data.payerID);
                this.$set(this.form, 'paymentId', data.paymentID);
                this.pageType.submit().then(
                    this.pageType.onSubmitSuccess,
                    this.pageType.onSubmitError
                ).then(
                    this.onSubmitSuccess,
                    this.onSubmitError
                );
            }
        }

    },

    computed: {
        error: function() {
            const errors = [];

            if(this.errors.payerId) {
                errors.push(this.errors.payerId.join('<b>'));
            }

            if(this.errors.paymentId) {
                errors.push(this.errors.paymentId.join('<b>'));
            }

            return errors.length ? errors.join('<br>') : false;
        }
    },

    updated() {
        if(this.shouldMountButton()) {
            this.button = Gateway(this.gateway).button('.paypal-payment-button', this);

            /*
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
                    this.$unwatchRecurring();
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
                this.$dispatch.request('g');
                this.$dispatch.request('paypal:disable');
            });
            */
        }
    },

    beforeCreate() {
        // this.$prevFormSubmitReply = this.$dispatch.getReply('form:submit');

        /*
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
        */
    },

    mounted() {
        this.pageType.hideSubmitButton();
        // this.$dispatch.request('submit:hide');

        Gateway(this.gateway).script((event) => {
            this.loaded = true;
        });
    },

    /*
    beforeDestroy() {
        if(this.$unwatchAmount) {
            this.$unwatchAmount();
        }

        if(this.$unwatchRecurring) {
            this.$unwatchRecurring();
        }
    },
    */

    data() {
        return {
            button: null,
            actions: null,
            loaded: false,
            submitting: false,
            disabled: !this.form.amount
        };
    }

};
</script>

<style>
.paypal-payment-button.disabled,
.paypal-payment-button:disabled {
    opacity: .5;
}
</style>
