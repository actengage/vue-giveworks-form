import Api from '../Api';
import '@/Icons/apple-pay';
import extend from 'lodash-es/extend';
import 'vue-awesome/icons/credit-card';
import 'vue-awesome/icons/brands/google-wallet';
import script from 'vue-interface/src/Helpers/Script';
import Icon from 'vue-awesome/components/Icon';

export default class Stripe extends Api {

    api() {
        return 'App\\SiteApis\\Gateways\\Stripe';
    }

    buttons() {
        return [{
            icon: 'credit-card',
            label: 'Credit Card',
            component: 'stripe-credit-card'
        },{
            icon: 'brands/apple-pay',
            iconScale: 3.5,
            component: 'stripe-payment-button'
        },{
            icon: 'brands/google-wallet',
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

        return this.elements().create('card', extend({style: style}, options));
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

    script(callback) {
        script('https://js.stripe.com/v3/').then(callback);
    }

}
