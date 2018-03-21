import { trimEnd } from 'lodash';

export default class Endpoint {

    constructor(api) {
        this.api = api;
        this._ensureMethodExists('slug');
    }

    find(id, options) {
        return this.api.get(this.api.url(this.slug(), id), options);
    }

    _ensureMethodExists(method) {
        if(!this._doesMethodExists(method)) {
            throw new Error('The "slug" method must exist in all Http/Endpoints/Endpoint classes');
        }
    }

    _doesMethodExists(method) {
        return typeof this[method] === "function";
    }

}
