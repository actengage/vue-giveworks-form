import { each } from 'lodash';
import { extend } from 'lodash';
import { trimEnd } from 'lodash';
import axios from 'axios/dist/axios';
import HttpConfig from '@/Config/Http';
import PageEndpoint from '@/Http/Endpoints/Page';

class Api {

    constructor() {
        this.config = HttpConfig;
        this.registerEndpoints(HttpConfig.endpoints);
    }

    get(url, options) {
        return axios.get(url, extend(options, HttpConfig.defaultRequestOptions));
    }

    post(url, data, options) {
        return axios.post(url, data, extend(options, HttpConfig.defaultRequestOptions));
    }

    put(url, data, options) {
        return axios.put(url, data, extend(options, HttpConfig.defaultRequestOptions));
    }

    delete(url, options) {
        return axios.delete(url, extend(options, HttpConfig.defaultRequestOptions));
    }

    baseUrl() {
        return trimEnd(HttpConfig.baseUrl, '/');
    }

    url() {
        return [this.baseUrl()].concat([].slice.call(arguments)).join('/');
    }

    registerEndpoints(endpoints) {
        each(endpoints, (endpoint, key) => {
            this.registerEndpoint(key, endpoint);
        }, this);
    }

    registerEndpoint(key, endpoint) {
        this[key] = new endpoint(this);
    }

}

export default new Api;
