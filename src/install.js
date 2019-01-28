import * as Components from './Components';
import { kebabCase } from 'vue-interface/src/Helpers/Functions';

if(!window || !window.Vue) {
    throw Error('Missing vue.js library!');
}

for(const i in Components) {
    window.Vue.component(Components[i].name || kebabCase(i), Components[i]);
}
