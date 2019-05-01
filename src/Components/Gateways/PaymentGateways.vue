<template>

    <div>

        <div v-if="buttons.length > 1" class="payment-gateway-buttons">
            <btn
                v-for="(button, i) in buttons"
                :key="i"
                :class="{'btn-success': button.active, 'btn-secondary': !button.active}"
                type="button"
                @click="activate(button)">
                <icon :icon="typeof button.icon === 'string' ? ['far', button.icon]: button.icon" :size="button.size || 'lg'" :class="{'mt-2 mb-1': !button.label}"/>
                <div v-if="button.label" class="small" v-html="button.label"/>
            </btn>
        </div>

        <alert v-if="!buttons || !buttons.length" variant="danger" class="d-flex align-items-center">
            <icon icon="exclamation-triangle" size="2x" class="mr-2"/>
            <div>There are not payment gateways configured for this site!</div>
        </alert>

        <component
            v-if="activeButton"
            :is="activeButton.component"
            :form="form"
            :page="page"
            :errors="errors"
            :page-type="pageType"
            :gateway="activeButton.gateway" />

    </div>

</template>

<script>
import Gateway from '../Gateways/Gateway';
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
        StripeCreditCard,
        StripePaymentButton,
        PaypalPaymentButton,
        AuthorizeNetCreditCard,
        Btn: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Btn'),
        Alert: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Alert')
    },

    mixins: [
        FormComponent
    ],

    props: {

        pageType: {
            type: Object,
            required: true
        }

    },

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

        activeButton() {
            return this.buttons.filter(button => button.active).pop();
        },

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
