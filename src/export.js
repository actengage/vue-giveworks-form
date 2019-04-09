import Vue from 'vue';
import bugsnag from '@bugsnag/js';
import bugsnagVue from '@bugsnag/plugin-vue';
import GiveworksForm from './Components/GiveworksForm';
// import './registerServiceWorker';

import './assets/scss/_global.scss';
import './assets/scss/_buttons.scss';
import './assets/scss/_forms.scss';

Vue.config.productionTip = false;

bugsnag('e66068bbbefd6ad235c13b0c178480da').use(bugsnagVue, Vue);

export default new Vue({
    el: '#app',
    components: {
        GiveworksForm
    }
});