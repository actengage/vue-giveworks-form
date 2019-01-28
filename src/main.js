import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

import './scss/_global.scss';
import './scss/_buttons.scss';
import './scss/_forms.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
