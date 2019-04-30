import Vue from 'vue';
import GiveworksForm from './Components/GiveworksForm';

import './assets/scss/_global.scss';
import './assets/scss/_buttons.scss';
import './assets/scss/_forms.scss';

Vue.config.productionTip = false;

export default new Vue({
    el: '#app',
    components: {
        GiveworksForm
    }
});
