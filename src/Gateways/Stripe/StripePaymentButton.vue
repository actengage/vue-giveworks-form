<template>

    <div>
        <div class="row my-5 py-1">
            <div class="col-xs-12">
                <activity-indicator size="sm" :center="true"></activity-indicator>
            </div>
        </div>

        <div v-if="!error">
            <div v-if="card" class="my-3">
                <button type="button" class="btn btn-xs btn-warning" style="float:right" @click="changeCard($event)">Change Card</button>

                <p>
                    <span v-if="card.name">{{card.name}}<br></span>
                    ****{{card.last4}} <span class="pl-2">{{card.exp_month}}/{{card.exp_year}}</span>
                </p>
            </div>

            <div class="stripe-payment-button mt-2 mb-4"></div>
        </div>

        <div class="alert alert-danger" v-else>
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
import 'vue-awesome/icons/warning';
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
            loaded: false
        };
    },

    methods: {
        changeCard: function(event) {
            this.card = false;
            this.form.token = null;
            this.$paymentRequest.show();
        },
        getPaymentLabel: function() {
            return 'Donation to ' + this.page.site.name;
        }
    },

    beforeDestroy() {
        this.$dispatch.request('submit:show');
    },

    updated() {
        const el = this.$el.querySelector('.stripe-payment-button');

        if(this.loaded && !this.error) {
            try {
                this.$paymentRequestButton.mount(el);
            }
            catch(error) {
                this.card = false;
                this.error = error;
                this.form.token = null;
            }
        }
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
                this.card = false;
                this.form.token = null;
            });

            this.$paymentRequest.on('token', (event) => {
                event.complete('success');
                this.card = event.token.card;
                this.form.token = event.token.id;
                this.$dispatch.request('form:submit');
            });

            this.$paymentRequest.canMakePayment().then((api) => {
                this.loaded = true;
            });
        });
    }

}
</script>
