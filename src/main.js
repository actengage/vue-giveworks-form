import Vue from 'vue';
import HttpConfig from './Config/Http';
import FormComponent from './Components/GiveworksForm.vue';

export default class GiveworksForm {

    constructor(el, options) {
        this.setApp(el);
    }

    setApp(el, options) {
        this.app = new Vue({
            el: el,
            components: {
                'giveworks-form': FormComponent
            }
        });
    }

}
