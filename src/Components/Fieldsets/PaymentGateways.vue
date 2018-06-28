<template>

    <div>

        <div class="row">

            <div :class="classes" v-for="button in buttons">

                <button
                    type="button"
                    class="btn btn-block payment-gateway-button"
                    :class="{'btn-success': button.active, 'btn-secondary': !button.active}"
                    @click="activate(button)">
                    <icon :name="button.icon" :scale="button.iconScale || 2" :class="{'mt-2 mb-1': !button.label}"></icon>
                    <div v-if="button.label" class="pb-1 small">{{ button.label }}</div>
                </button>

            </div>

        </div>

        <div v-if="!buttons || !buttons.length" class="alert alert-danger">
            <div class="row">
                <div class="col-xs-2 text-center">
                    <icon name="warning" scale="2.25" class="mt-2"></icon>
                </div>
                <div class="col-xs-10">
                    There are not payment gateways configured for this site!
                </div>
            </div>
        </div>
        <div v-else>
            <hr>
            <div v-if="button.active" v-for="button in buttons">
                <component :is="button.component" :form="form" :page="page" :errors="errors" :gateway="button.gateway"></component>
            </div>
        </div>

    </div>

</template>

<script>
import each from 'lodash-es/each';
import merge from 'lodash-es/merge';
import Gateway from '@/Components/Gateways/Gateway';
import FormComponent from '@/Mixins/FormComponent';
import Icon from 'vue-awesome/components/Icon';
import StripeCreditCard from '@/Components/Gateways/Stripe/StripeCreditCard';
import PaypalPaymentButton from '@/Components/Gateways/PayPal/PayPalPaymentButton';
import StripePaymentButton from '@/Components/Gateways/Stripe/StripePaymentButton';
import AuthorizeNetCreditCard from '@/Components/Gateways/AuthorizeNet/AuthorizeNetCreditCard';

export default {

    name: 'payment-gateways',

    components: {
        Icon,
        StripeCreditCard,
        StripePaymentButton,
        PaypalPaymentButton,
        AuthorizeNetCreditCard,
    },

    mixins: [
        FormComponent
    ],

    methods: {

        activate(button) {
            this.deactivate();
            button.active = true;
            this.$set(this.form, 'gateway', Gateway(button.gateway).api());
        },

        deactivate() {
            each(this.buttons, button => {
                button.active = false;
            });
        },

        getButtons: function() {
            const buttons = [];

            each(this.page.site.gateways, gateway => {
                if(!Gateway(gateway).buttons) {
                    throw new Error(Gateway(gateway).api()+' doesn\'t have a required buttons() method.');
                }

                each(Gateway(gateway).buttons(), button => {
                    button.active = false;
                    button.gateway = gateway;
                    buttons.push(button);
                });
            });

            return buttons;
        },

        onResize(event) {
            this.width = this.$el.offsetWidth;
            return this.onResize;
        }

    },

    computed: {

        classes() {
            return {
                'col-sm-6': this.width < 310,
                'col-sm-6 col-lg-4': this.width >= 310,
            }
        }

    },

    mounted() {
        if(this.buttons && this.buttons[0]) {
            this.activate(this.buttons[0]);
        }
        else {
            this.$dispatch.request('submit:hide');
        }

        window.addEventListener('resize', this.onResize());
    },

    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },

    data() {
        return {
            width: null,
            gateway: null,
            buttons: this.getButtons()
        };
    }

}

</script>

<style lang="scss">
.payment-gateway-button {
    height: 85px;

    .small {
        line-height: 1rem;
    }
}
</style>
