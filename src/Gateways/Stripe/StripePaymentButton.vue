<template>

    <div>

        <div v-if="!error">
            <div class="stripe-payment-button"></div>
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

    mounted() {
        const gateway = Gateway(this.gateway);

        gateway.script((event) => {
            const paymentRequest = gateway.paymentRequest(1000, 'Test label...');
            const button = gateway.paymentRequestButton(paymentRequest);

            paymentRequest.canMakePayment().then((result) => {
                button.mount(this.$el.querySelector('.stripe-payment-button'));
            }).catch((error) => {
                this.error = error;
            });
        });
    }

}
</script>
