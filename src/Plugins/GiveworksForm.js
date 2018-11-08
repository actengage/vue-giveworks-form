import Broadcast from '@objectivehtml/broadcast';
import GiveworksForm from '@/Components/GiveworksForm';

export default function install(Vue, options) {
    Vue.prototype.$broadcast = new Broadcast();
    Vue.prototype.$dispatch = Vue.prototype.$broadcast.dispatch();

    Vue.component('giveworks-form', GiveworksForm);

    if(window && window.Vue) {
        const data = (
            window.GiveworksFormOptions && window.GiveworksFormOptions.data
        ) ? window.GiveworksFormOptions.data : {};

        const VueGiveworksForm = Vue.extend({
            components: {
                GiveworksForm
            }
        });

        window.App = new VueGiveworksForm({
            el: '#app',
            data() {
                return data;
            }
        });
    }
}
