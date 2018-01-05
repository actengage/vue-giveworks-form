<template>

    <div>
        <div v-if="!error">
            <div v-if="card" class="my-3">
                <div class="row">
                    <div class="col-xs-2">
                        <div class="mr-6">
                            <icon v-if="card.brand === 'Visa'" name="cc-visa" scale="3.5"></icon>
                            <icon v-else-if="card.brand === 'MasterCard'" name="cc-mastercard" scale="3.5"></icon>
                            <icon v-else-if="card.brand === 'American Express'" name="cc-amex" scale="3.5"></icon>
                            <icon v-else-if="card.brand === 'Discover'" name="cc-discover" scale="3.5"></icon>
                            <icon v-else-if="card.brand === 'JCB'" name="cc-jcb" scale="3.5"></icon>
                            <icon v-else-if="card.brand === 'Diners Club'" name="cc-diners-club" scale="3.5"></icon>
                            <icon v-else name="credit-card" scale="3.5"></icon>
                        </div>
                    </div>
                    <div class="col-xs-10">
                        <div class="pl-2">
                            <button type="button" class="btn btn-xs btn-warning float-right" :disabled="submitting" @click="changeCard($event)">Change Card</button>
                            <span v-if="card.name">{{card.name}}<br></span>
                            <small>****{{card.last4}} <span class="pl-2">{{card.exp_month}}/{{card.exp_year}}</span></small>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="!loaded || submitting" class="row my-5 py-1">
                <div class="col-xs-12">
                    <activity-indicator size="sm" :center="true"></activity-indicator>
                </div>
            </div>

            <div v-else>
                <div class="stripe-payment-button mt-2 mb-4"></div>
            </div>
        </div>

        <div v-else class="alert alert-danger">
            <div class="row">
                <div class="col-xs-3 text-center">
                    <icon name="warning" scale="2" class="mt-2"></icon>
                </div>
                <div class="col-xs-9">
                    {{ error.message }}
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import 'vue-awesome/icons/cc-jcb';
import 'vue-awesome/icons/warning';
import 'vue-awesome/icons/cc-visa';
import 'vue-awesome/icons/cc-amex';
import 'vue-awesome/icons/credit-card';
import 'vue-awesome/icons/cc-discover';
import 'vue-awesome/icons/cc-mastercard';
import 'vue-awesome/icons/cc-diners-club';
import Gateway from '/Gateways/Gateway';
import Icon from 'vue-awesome/components/Icon';
import ActivityIndicator from '/Components/ActivityIndicators/ActivityIndicator';

export default {

    name: 'stripe-payment-button',

    components: {
        Icon,
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
        }
    },

    data() {
        return {
            card: false,
            error: false,
            loaded: false,
            submitting: false,
            changingCard: false
        };
    },

    methods: {
        changeCard: function(event) {
            this.changingCard = true;
            this.$paymentRequest.show();
        },
        getPaymentLabel: function() {
            return 'Donation to ' + this.page.site.name;
        }
    },

    updated() {
        if(this.loaded && !this.submitting && !this.error) {
            try {
                this.$paymentRequestButton.mount(this.$el.querySelector('.stripe-payment-button'));
            }
            catch(error) {
                this.card = false;
                this.error = error;
                this.form.token = null;
            }
        }
    },

    created() {
        this.$dispatch.request('form').then(form => {
            if(form.$card) {
                this.card = form.$card;
            }
        });

        this.$submitEvent = this.$dispatch.on('form:submit', () => {
            this.submitting = true;
        });

        this.$submitCompleteEvent = this.$dispatch.on('form:submit:complete', () => {
            this.submitting = false;
        });
    },

    beforeDestroy() {
        if(this.card) {
            this.$dispatch.request('form').then(form => {
                form.$card = this.card;
            });
        }

        this.$dispatch.request('submit:show');
        this.$dispatch.off(this.$submitEvent);
        this.$dispatch.off(this.$submitCompleteEvent);
    },

    mounted() {
        const el = this.$el.querySelector('.stripe-payment-button');
        const gateway = Gateway(this.gateway);

        this.$dispatch.request('submit:hide');

        gateway.script((event) => {
            this.$paymentRequest = gateway.paymentRequest(1000, this.getPaymentLabel());
            this.$paymentRequestButton = gateway.paymentRequestButton(this.$paymentRequest);

            this.$paymentRequestButton.on('click', (event) => {
                if(this.form.token) {
                    this.$dispatch.request('form:submit', event);
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
                    this.$dispatch.request('form:submit');
                }
                else {
                    this.changingCard = false;
                }
            });

            this.$paymentRequest.canMakePayment().then((api) => {
                this.loaded = true;
            });
        });
    }

}
</script>
