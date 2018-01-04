<template>

    <div>

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

export default {

    name: 'stripe-payment-button',

    components: {
        Icon
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
            error: null
        };
    },

    methods: {
        getPaymentLabel: function() {
            return 'Donation to ' + this.page.site.name;
        }
    },

    mounted() {
        const gateway = Gateway(this.gateway);

        this.$dispatch.request('form:disable');

        gateway.script((event) => {
            const paymentRequest = gateway.paymentRequest(1000, this.getPaymentLabel());
            const paymentRequestButton = gateway.paymentRequestButton(paymentRequest);

            paymentRequest.on('token', (event) => {
                this.$dispatch.request('form:enable');
                this.$set(this.form, 'token', event.token.id);

                console.log('token', event);

                // Report to the browser that the payment was successful, prompting
                // it to close the browser payment interface. (or event.complete('fail'))
                event.complete('success');
            });

            paymentRequest.canMakePayment().then((result) => {
                paymentRequestButton.mount(this.$el.querySelector('.stripe-payment-button'));
            }).catch((error) => {
                this.error = error;
                this.$set(this.form, 'token', null);
            });
        });
    }

}
</script>
