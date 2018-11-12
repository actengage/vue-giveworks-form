import * as Components from './Components';
import { kebabCase } from 'vue-interface/src/Helpers/Functions';

if(!window || !window.Vue) {
    throw Error('You must include vue.js before vue-giveworks-forms.install.js');
}

for(const i in Components) {
    window.Vue.component(Components[i].name || kebabCase(i), Components[i]);
}
