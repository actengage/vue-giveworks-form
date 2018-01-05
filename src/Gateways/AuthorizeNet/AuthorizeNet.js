import Api from '../Api';
import App from '/Config/App';
import Script from '/Helpers/Script';

export default class AuthorizetNet extends Api {

    api() {
        return 'App\\SiteApis\\Gateways\\AuthorizeNet';
    }

    buttons() {
        return [{
            icon: 'credit-card',
            label: 'Credit Card',
            component: 'authorize-net-button'
        }];
    }

    script(callback) {
        const url = App.debug ? // Is app in developer mode?
            'https://jstest.authorize.net/v1/Accept.js' : // Developer
            'https://js.authorize.net/v1/Accept.js'; // Production;

        Script(url, callback);
    }

 }
