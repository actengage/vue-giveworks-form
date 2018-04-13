import Api from '../Api';
import App from '@/Config/App';
import script from 'vue-toolbox/src/Helpers/Script';

export default class AuthorizetNet extends Api {

    api() {
        return 'App\\SiteApis\\Gateways\\AuthorizeNet';
    }

    buttons() {
        return [{
            icon: 'credit-card',
            label: 'Credit Card',
            component: 'authorize-net-credit-card'
        }];
    }

    createToken(card, callback) {
        return this.accept().dispatchData({
            cardData: card,
            authData: {
                apiLoginID: this.options.login_id,
                clientKey: this.options.public_key
            }
        }, callback);
    }

    accept() {
        if(!this._accept) {
            this._accept = window.Accept;
        }

        return this._accept;
    }

    script(callback) {
        const url = App.debug ? // Is app in developer mode?
            'https://jstest.authorize.net/v1/Accept.js' : // Developer
            'https://js.authorize.net/v1/Accept.js'; // Production;

        Script(url, callback);
    }

 }
