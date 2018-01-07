<template>

    <div>

        <div class="row">

            <div class="col-md-6 col-lg-4" v-for="button in buttons">

                <button
                    type="button"
                    class="btn btn-block payment-gateway-button"
                    :class="{'btn-success': button.active, 'btn-secondary': !button.active}"
                    @click="activate(button)">
                    <icon :name="button.icon" :scale="button.iconScale || 2" :class="{'mt-2 mb-1': !button.label}"></icon>
                    <div v-if="button.label" class="pt-1 small">{{ button.label }}</div>
                </button>

            </div>

        </div>

        <hr>

        <div v-for="button in buttons" v-if="button.active">
            <component :is="button.component" :form="form" :page="page" :errors="errors" :gateway="button.gateway"></component>
        </div>

    </div>

</template>

<script>
import { each } from 'lodash-es';
import { merge } from 'lodash-es';
import Gateway from '/Gateways/Gateway';
import BaseComponent from './BaseComponent';
import Icon from 'vue-awesome/components/Icon';
import StripeCreditCard from '/Gateways/Stripe/StripeCreditCard';
import StripePaymentButton from '/Gateways/Stripe/StripePaymentButton';
import AuthorizeNetCreditCard from '/Gateways/AuthorizeNet/AuthorizeNetCreditCard';

export default {

    extends: BaseComponent,

    name: 'payment-gateways',

    components: {
        Icon,
        StripeCreditCard,
        StripePaymentButton,
        AuthorizeNetCreditCard
    },

    data() {
        return {
            gateway: null,
            buttons: this.getButtons()
        };
    },

    methods: {
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

        deactivate() {
            each(this.buttons, button => {
                button.active = false;
            });
        },

        activate(button) {
            this.deactivate();
            button.active = true;
            this.$set(this.form, 'gateway', Gateway(button.gateway).api());
        }

    },

    mounted() {
        if(!this.buttons || !this.buttons[0]) {
            throw new Error('Every Gateway must have at least one button defined.');
        }

        this.activate(this.buttons[0]);
    }

}

</script>

<style>
    .payment-gateway-button { height: 85px; }
</style>
