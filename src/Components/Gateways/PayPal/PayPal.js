import Api from '../Api';
import script from 'vue-interface/src/Helpers/Script';

export default class PayPal extends Api {
    api() {
        return 'App\\SiteApis\\Gateways\\PayPal';
    }

    buttons() {
        return [{
            icon: ['fab', 'paypal'],
            label: 'PayPal',
            component: 'paypal-payment-button'
        }];
    }

    paypal() {
        if(!this._paypal) {
            this._paypal = window.paypal;
        }

        return this._paypal;
    }

    button(el, context) {
        return this.paypal().Button.render({
            env: process.ENV === 'production' ? 'production' : 'sandbox',

            locale: 'en_US',

            client: {
                sandbox: this.options.client_id
            },

            style: {
                shape: 'rect',
                size: 'responsive'
            },

            commit: false,

            payment: function(data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [{
                            amount: {
                                total: context.form.amount,
                                currency: 'USD'
                            }
                        }]
                    },
                    experience: {
                        input_fields: {
                            no_shipping: 1
                        }
                    }
                });
            },

            validate: context.onPaypalValidate,

            onRender: context.onPaypalRender,

            onClick: context.onPaypalClick,

            onCancel: context.onPaypalCancel,

            onError: context.onPaypalError,

            onAuthorize: context.onPaypalAuthorize
        }, el);
    }

    script(success, error) {
        script('https://www.paypalobjects.com/api/checkout.js').then(success, error);
    }
}
