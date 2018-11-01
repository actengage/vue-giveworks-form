import Stripe from './Stripe/Stripe';
import PayPal from './PayPal/PayPal';
import AuthorizeNet from './AuthorizeNet/AuthorizeNet';

const Gateways = {
    'PayPal': PayPal,
    'Stripe': Stripe,
    'Authorize.Net': AuthorizeNet
};

const instances = {};

export default function(key, options) {
    if (typeof key === 'object') {
        options = key.options;
        key = key.name;
    }

    if (!instances[key]) {
        const Api = Gateways[key];

        if (!Api) {
            throw new Error('"' + key + '" is not in the list of supported gateways. Open /Gateways/Gateway.vue and add it to the list.');
        }

        instances[key] = new Api(options);
    }

    return instances[key];
}
