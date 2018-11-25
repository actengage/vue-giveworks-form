<template>

    <div>
        <div v-if="!error">
            <div v-if="card" class="my-3">
                <div class="row">
                    <div class="col-xs-2">
                        <div class="mr-6">
                            <icon v-if="card.brand === 'Visa'" :icon="['fab', 'cc-visa']" scale="3.5"/>
                            <icon v-else-if="card.brand === 'MasterCard'" :icon="['fab', 'cc-mastercard']" scale="3.5"/>
                            <icon v-else-if="card.brand === 'American Express'" :icon="['fab', 'cc-amex']" scale="3.5"/>
                            <icon v-else-if="card.brand === 'Discover'" :icon="['fab', 'cc-discover']" scale="3.5"/>
                            <icon v-else-if="card.brand === 'JCB'" :icon="['fab', 'cc-jcb']" scale="3.5"/>
                            <icon v-else-if="card.brand === 'Diners Club'" :icon="['fab', 'cc-diners-club']" scale="3.5"/>
                            <icon v-else :icon="['far', 'credit-card']" scale="3.5"/>
                        </div>
                    </div>
                    <div class="col-xs-10">
                        <div class="pl-2">
                            <btn type="button" variant="warning" class="float-right" :disabled="submitting" @click="changeCard($event)">Change Card</btn>
                            <span v-if="card.name">{{card.name}}<br></span>
                            <small>****{{card.last4}} <span class="pl-2">{{card.exp_month}}/{{card.exp_year}}</span></small>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="!loaded || submitting" class="row my-5 py-1">
                <div class="col-xs-12">
                    <activity-indicator size="sm" :center="true"/>
                </div>
            </div>

            <div v-else>
                <div class="stripe-payment-button mt-2 mb-4"/>
            </div>
        </div>

        <alert v-else variant="danger" class="d-flex align-items-center">
            <icon icon="exclamation-triangle" size="2x" class="mr-3"/>
            <div v-html="error.message"/>
        </alert>

    </div>

</template>

<script>
import Gateway from '../Gateway';
import PaymentGateway from '../../../Mixins/PaymentGateway';

export default {

    name: 'stripe-payment-button',

    mixins: [
        PaymentGateway
    ],

    methods: {

        changeCard: function(event) {
            this.changingCard = true;
            this.$paymentRequest.show();
        },

        getPaymentLabel: function() {
            return `Donation to ${this.page.site.name}`;
        },

        onSubmit() {
            this.submitting = true;
        },

        onSubmitComplete() {
            this.submitting = false;
        }

    },

    updated() {
        if(this.loaded && !this.submitting && !this.error) {
            try {
                this.$paymentRequestButton.mount(this.$el.querySelector('.stripe-payment-button'));
            }
            catch (error) {
                this.card = false;
                this.error = error;
                this.form.token = null;
            }
        }
    },

    beforeCreate() {
        this.pageType.$on('submit', this.onSubmit);
        this.pageType.$on('submit-complete', this.onSubmitComplete);

        /*
        this.$dispatch.request('form').then(form => {
            if(form.$card) {
                this.card = form.$card;
            }
        });

        this.$submitEvent = this.$dispatch.on('form:submit', (data) => {
            this.submitting = true;
        });

        this.$submitCompleteEvent = this.$dispatch.on('form:submit:complete', () => {
            this.submitting = false;
        });
        */
    },

    beforeDestroy() {
        this.pageType.$off('submit', this.onSubmit);
        this.pageType.$off('submit-complete', this.onSubmitComplete);
    },

    mounted() {
        const gateway = Gateway(this.gateway);

        this.pageType.hideSubmitButton();
        // this.$dispatch.request('submit:hide');

        gateway.script((event) => {
            this.$paymentRequest = gateway.paymentRequest(this.form.amount, this.getPaymentLabel());
            this.$paymentRequestButton = gateway.paymentRequestButton(this.$paymentRequest);

            this.$paymentRequestButton.on('click', (event) => {
                if(this.form.token) {
                    this.pageType.submit(
                        this.pageType.onSubmitSuccess,
                        this.pageType.onSubmitError
                    );
                }
            });

            this.$paymentRequest.on('cancel', (event) => {
                if(!this.changingCard) {
                    this.card = false;
                    this.form.token = null;
                }
                else {
                    this.changingCard = false;
                }
            });

            this.$paymentRequest.on('token', (event) => {
                event.complete('success');
                this.card = event.token.card;
                this.form.token = event.token.id;

                if(!this.changingCard) {
                    this.pageType.submit(
                        this.pageType.onSubmitSuccess,
                        this.pageType.onSubmitError
                    );
                    // this.$dispatch.request('form:submit');
                }
                else {
                    this.changingCard = false;
                }
            });

            this.$paymentRequest.canMakePayment().then((api) => {
                this.loaded = true;
            });
        });
    },

    data() {
        return {
            card: false,
            error: false,
            loaded: false,
            submitting: false,
            changingCard: false
        };
    }

};
</script>
