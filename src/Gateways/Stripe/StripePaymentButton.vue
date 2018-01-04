<template>

    <div>
        <div v-if="loading" class="row my-5 py-1">
            <div class="col-xs-12">
                <activity-indicator size="sm" :center="true"></activity-indicator>
            </div>
        </div>

        <div v-if="!error">
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
            loading: false,
            error: null
        };
    },

    methods: {
        getPaymentLabel: function() {
            return 'Donation to ' + this.page.site.name;
        }
    },

    beforeDestroy() {
        this.$dispatch.request('submit:show');
    },

    mounted() {
        const el = this.$el.querySelector('.stripe-payment-button');
        const gateway = Gateway(this.gateway);

        this.loading = true;
        this.$dispatch.request('submit:hide');

        gateway.script((event) => {
            const paymentRequest = gateway.paymentRequest(1000, this.getPaymentLabel());
            const paymentRequestButton = gateway.paymentRequestButton(paymentRequest);

            paymentRequestButton.on('click', (event) => {
                console.log('click', event);
                
                if(this.form.token) {
                    this.$dispatch.request('form:submit', event);
                }
            });

            paymentRequest.on('token', (event) => {
                this.form.token = event.token.id;
                event.complete('success');
            });

            paymentRequest.canMakePayment().then((result) => {
                this.loading = false;
                paymentRequestButton.mount(el);
            }).catch((error) => {
                this.error = error;
                this.form.token = null;
            });
        });
    }

}
</script>
