import Stripe from './Stripe/Stripe';
import AuthorizeNet from './AuthorizeNet/AuthorizeNet';

const Gateways = {
    'Stripe': Stripe,
    'Authorize.Net': AuthorizeNet
};

const instances = {};

export default function(key, options) {
    if(typeof key === 'object') {
        options = key.options;
        key = key.name;
    }

    if(!instances[key]) {
        const Api = Gateways[key];

        if(!Api) {
            throw new Error('The "'+key+'" is not supported!');
        }

        instances[key] = new Api(options);
    }

    return instances[key];
}
