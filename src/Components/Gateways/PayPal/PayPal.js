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
        if (!this._paypal) {
            this._paypal = window.paypal;
        }

        return this._paypal;
    }

    button(el, $dispatch) {
        const button = this.paypal().Button.render({
            // 'production' or 'sandbox'
            env: 'sandbox',

            locale: 'en_US',

            client: {
                sandbox: this.options.client_id
            },

            style: {
                shape: 'rect',
                size: 'responsive'
            },

            commit: false,

            validate: (actions) => {
                button.amount ? actions.enable() : actions.disable();

                $dispatch.reply('paypal:enable', (resolve, reject) => {
                    actions.enable();
                    resolve(actions);
                });

                $dispatch.reply('paypal:disable', (resolve, reject) => {
                    actions.disable();
                    resolve(actions);
                });

                $dispatch.emit('paypal:validate', actions);
            },

            payment: function(data, actions) {
                const payment = actions.payment.create({
                    payment: {
                        transactions: [{
                            amount: {
                                total: button.amount,
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

                $dispatch.emit('paypal:payment', payment);

                return payment;
            },

            onRender: function() {
                $dispatch.emit('paypal:render', this);
            },

            onClick: function(data) {
                $dispatch.emit('paypal:click', this, data);
            },

            onCancel: (data, actions) => {
                $dispatch.emit('paypal:cancel', data, actions);
            },

            onError: (error) => {
                $dispatch.emit('paypal:error', error);
            },

            onAuthorize: (data, actions) => {
                $dispatch.emit('paypal:authorize', data, actions);
            }

        }, el);

        return button;
    }

    script(success, error) {
        script('https://www.paypalobjects.com/api/checkout.js').then(success, error);
    }
}
