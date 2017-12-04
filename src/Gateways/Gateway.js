import Stripe from './Stripe';

const Gateways = {
    'Stripe': Stripe
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
