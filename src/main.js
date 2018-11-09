import './scss/_variables.scss';
import './scss/_forms.scss';
import './scss/main.scss';

import * as Fields from './Components/Fields';

// import 'es6-object-assign';
// import 'promise-polyfill/src/polyfill';
// import GiveworksForm from '@/Plugins/GiveworksForm';

/*
import {
    InputField,
    SelectField
} from './Components/Fields';

export {
    InputField,
    SelectField
};
*/

if(window && window.Vue) {
    for(let i in Fields) {
        if(Fields[i].name) {
            window.Vue.component(Fields[i].name, Fields[i]);
        }
    }
}

// export default GiveworksForm;
