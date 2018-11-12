<template>

    <div>

        <div class="row">
            <div :class="classes" v-for="button in buttons">
                <button
                    type="button"
                    class="btn btn-block payment-gateway-button"
                    :class="{'btn-success': button.active, 'btn-secondary': !button.active}"
                    @click="activate(button)">
                    <icon :icon="typeof button.icon === 'string' ? ['far', button.icon]: button.icon" :size="button.size || 'lg'" :class="{'mt-2 mb-1': !button.label}"/>
                    <div v-if="button.label" class="pb-1 small">{{ button.label }}</div>
                </button>
            </div>
        </div>

        <alert v-if="!buttons || !buttons.length" variant="danger">
            <div class="row">
                <div class="col-xs-2 text-center">
                    <icon icon="exclamation-triangle" scale="2.25" class="mt-2"/>
                </div>
                <div class="col-xs-10">
                    There are not payment gateways configured for this site!
                </div>
            </div>
        </alert>

        <div v-else>
            <hr>
            <div v-if="button.active" v-for="button in buttons">
                <component :is="button.component" :form="form" :page="page" :errors="errors" :gateway="button.gateway"/>
            </div>
        </div>

    </div>

</template>

<script>
import Gateway from '../Gateways/Gateway';
import Alert from 'vue-interface/src/Components/Alert';
import FormComponent from '../../Mixins/FormComponent';
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';
import StripeCreditCard from '../Gateways/Stripe/StripeCreditCard';
import PaypalPaymentButton from '../Gateways/PayPal/PayPalPaymentButton';
import StripePaymentButton from '../Gateways/Stripe/StripePaymentButton';
import AuthorizeNetCreditCard from '../Gateways/AuthorizeNet/AuthorizeNetCreditCard';

export default {

    name: 'payment-gateways',

    components: {
        Icon,
        Alert,
        StripeCreditCard,
        StripePaymentButton,
        PaypalPaymentButton,
        AuthorizeNetCreditCard
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
            this.buttons.forEach(button => {
                button.active = false;
            });
        },

        getButtons: function() {
            const buttons = [];

            this.page.site.gateways.forEach(gateway => {
                if(!Gateway(gateway).buttons) {
                    throw new Error(Gateway(gateway).api() + ' doesn\'t have a required buttons() method.');
                }

                Gateway(gateway).buttons().forEach(button => {
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
                'col-sm-6 col-lg-4': this.width >= 310
            };
        }

    },

    mounted() {
        if(this.buttons && this.buttons[0]) {
            this.activate(this.buttons[0]);
        }
        else {
            // this.$dispatch.request('submit:hide');
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

};
</script>

<style lang="scss">
.payment-gateway-button {
    height: 85px;

    .small {
        line-height: 1rem;
    }
}
</style>
