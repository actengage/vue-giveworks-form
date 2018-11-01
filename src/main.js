import 'es6-object-assign';
import 'promise-polyfill/src/polyfill';
import GiveworksForm from '@/Plugins/GiveworksForm';

if (window && window.Vue) {
    window.Vue.use(GiveworksForm);
}

export default GiveworksForm;
