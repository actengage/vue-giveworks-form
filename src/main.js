import Vue from 'vue';
import HttpConfig from './Config/Http';
import GiveworksForm from './Components/GiveworksForm.vue';

export default class GiveworksVueApp {

    constructor(el, options) {
        this.setApp(el);
    }

    setApp(el, options) {
        this.app = new Vue({
            el: el,
            components: {
                GiveworksForm
            }
        });
    }

}
