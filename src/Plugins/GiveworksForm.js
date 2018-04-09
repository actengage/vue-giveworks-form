import Broadcast from '@objectivehtml/broadcast';

export default function install(Vue, options) {
    Vue.prototype.$broadcast = new Broadcast;
    Vue.prototype.$dispatch = Vue.prototype.$broadcast.dispatch();
}
