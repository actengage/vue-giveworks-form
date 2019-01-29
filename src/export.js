import Vue from 'vue';
import GiveworksForm from './Components/GiveworksForm';
// import './registerServiceWorker';

import './scss/_global.scss';
import './scss/_buttons.scss';
import './scss/_forms.scss';

Vue.config.productionTip = false;

export default new Vue({
    el: '#app',
    components: {
        GiveworksForm
    }
});