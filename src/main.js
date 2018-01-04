import Vue from 'vue/dist/vue';
import HttpConfig from './Config/Http';
import Broadcast from '@objectivehtml/broadcast';
import GiveworksForm from './Components/GiveworksForm';

export default class GiveworksVueApp {

    constructor(el, data) {
        this.setApp(el, data);
    }

    setApp(el, data) {
        const broadcast = new Broadcast;

        Vue.prototype.$broadcast = new Broadcast;
        Vue.prototype.$dispatch = Vue.prototype.$broadcast.dispatch();

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
