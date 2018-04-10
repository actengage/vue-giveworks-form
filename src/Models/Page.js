import { Model } from 'vue-toolbox';
import { Request } from 'vue-toolbox';

export default class Page extends Model {

    endpoint() {
        return 'page'
    }

    uri(method) {
        return `${this.endpoint()}/${this.get('id')}`;
    }

}
