import Api from './Api';
import Icon from 'vue-awesome/components/Icon'

import '/Icons/apple-pay';
import { extend } from 'lodash-es';
import script from '/Helpers/Script';
import 'vue-awesome/icons/credit-card';
import 'vue-awesome/icons/google-wallet';

export default class Stripe extends Api {

    api() {
        return 'App\\SiteApis\\Apis\\Stripe';
    }

    buttons() {
        return [{
            icon: 'credit-card',
            label: 'Credit Card',
            component: 'stripe-credit-card'
        },{
            icon: 'apple-pay',
            iconScale: 3,
            component: 'stripe-payment-button'
        },{
            icon: 'google-wallet',
            iconScale: 1.5,
            label: 'Wallet',
            component: 'stripe-payment-button'
        }];

        /*
        //if(this.options.apple_pay) {
            buttons.push({
                icon: 'apple-pay',
                iconScale: 3,
                component: 'stripe-payment-button'
            });
        //}

        //if(this.options.payment_stripe) {
            buttons.push({
                icon: 'google-wallet',
                iconScale: 1.5,
                label: 'Wallet',
                component: 'stripe-payment-button'
            });
        //}

        return buttons;
        */
    }

    paymentRequest(amount, label) {
        return this.stripe().paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: label,
                amount: amount,
            }
        });
    }

    paymentRequestButton(paymentRequest) {
        const elements = this.elements();

        return elements.create('paymentRequestButton', {
            paymentRequest: paymentRequest
        });
    }

    card(options) {
        const style = {
            base: {
                color: '#32325d',
                lineHeight: '20px',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#b41327',
                iconColor: '#b41327'
            }
        };

        return this.elements().create('card', extend({style: style}, options));
    }

    elements() {
        return this.stripe().elements();
    }

    stripe() {
        if(!this._stripe) {
            this._stripe = new window.Stripe(this.options.public_key);
        }

        return this._stripe;
    }

    script(callback) {
        script('https://js.stripe.com/v3/', callback);
    }

}
