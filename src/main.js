import Vue from 'vue/dist/vue';
import HttpConfig from './Config/Http';
import GiveworksForm from './Components/GiveworksForm';

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
