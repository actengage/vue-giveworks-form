import Vue from 'vue/dist/vue';
import HttpConfig from './Config/Http';
import GiveworksForm from './Components/GiveworksForm';

export default class GiveworksVueApp {

    constructor(el, data) {
        this.setApp(el, data);
    }

    setApp(el, data) {
        this.app = new Vue({
            el: el,
            data: function() {
                return data;
            },
            components: {
                GiveworksForm
            }
        });
    }

}
