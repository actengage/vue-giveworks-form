import './scss/_variables.scss';
import './scss/main.scss';
import './scss/_buttons.scss';
import './scss/_forms.scss';

import GiveworksForm from './Components/GiveworksForm';

if(!window || !window.Vue) {
    throw Error('You must include vue.js before vue-giveworks-forms.js');
}

window.App = new window.Vue({
    el: '#app',
    components: {
        GiveworksForm
    }
});
