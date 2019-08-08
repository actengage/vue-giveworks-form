import Api from '../Api';
import App from '../../../Config/App';
import script from 'vue-interface/src/Helpers/Script';

export default class AuthorizetNet extends Api {
    api() {
        return 'App\\SiteApis\\Gateways\\AuthorizeNet';
    }

    buttons() {
        return [{
            icon: ['far', 'credit-card'],
            label: 'Credit Card',
            component: {
                module: import('../../Fields/CreditCardField'),
                props: {
                    tokenData({ card }) {
                        return {
                            cardNumber: card.number,
                            month: card.expMonth,
                            year: card.expYear,
                            cardCode: card.cvc
                        };
                    },
                    validateGateway(gateway) {
                        return !!(gateway.options.login_id && gateway.options.public_key);
                    }
                }
            }
        }];
    }

    createToken(card) {
        return new Promise((resolve, reject) => {
            this.accept().dispatchData({
                cardData: card,
                authData: {
                    apiLoginID: this.options.login_id,
                    clientKey: this.options.public_key
                }
            }, e => e.messages.resultCode === 'Ok' ? resolve(e) : reject(e));
        });
    }

    accept() {
        return window.Accept;
    }

    script(success, error) {
        const url = App.debug // Is app in developer mode?
            ? 'https://jstest.authorize.net/v1/Accept.js' // Developer
            : 'https://js.authorize.net/v1/Accept.js'; // Production;

        script(url).then(success, error);
    }
}
