import Endpoint from './Endpoint';

export default class Page extends Endpoint {

    slug() {
        return 'page';
    }

    submit(id, data, options) {
        return this.api.post(this.api.url(this.slug(), id), data, options);
    }

}
