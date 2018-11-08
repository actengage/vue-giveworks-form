import Api from '../Api';
import script from 'vue-interface/src/Helpers/Script';
import { extend } from 'vue-interface/src/Helpers/Functions';

export default class Stripe extends Api {
    api() {
        return 'App\\SiteApis\\Gateways\\Stripe';
    }

    buttons() {
        return [{
            icon: ['far', 'credit-card'],
            label: 'Credit Card',
            size: '2x',
            component: 'stripe-credit-card'
        }, {
            icon: ['fab', 'apple-pay'],
            size: '3x',
            component: 'stripe-payment-button'
        }, {
            icon: ['fab', 'google-wallet'],
            label: 'Wallet',
            size: '2x',
            component: 'stripe-payment-button'
        }];
    }

    paymentRequest(amount, label) {
        return this.stripe().paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: label,
                amount: amount
            }
        });
    }

    createToken(card, options) {
        return this.stripe().createToken(card, options);
    }

    paymentRequestButton(paymentRequest) {
        return this.elements().create('paymentRequestButton', {
            paymentRequest: paymentRequest,
            style: {
                paymentRequestButton: {
                    type: 'donate', // 'default' | 'donate' | 'buy'
                    theme: 'dark', // 'dark' | 'light' | 'light-outline'
                    height: '51.60px' // default: '40px', the width is always '100%'
                }
            }
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

        return this.elements().create('card', extend({ style: style }, options));
    }

    elements() {
        return this.stripe().elements();
    }

    stripe() {
        if(!this.options.publishable_key) {
            throw new Error('This site API was authenticated using an older version of Giveworks. To use new version of Giveworks you must setup your Stripe account again.');
        }

        return this._stripe || (this._stripe = new window.Stripe(this.options.publishable_key));
    }

    script(success, error) {
        script('https://js.stripe.com/v3/').then(success, error);
    }
}
