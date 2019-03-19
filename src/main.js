import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';

import './scss/_global.scss';
import './scss/_buttons.scss';
import './scss/_forms.scss';

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')