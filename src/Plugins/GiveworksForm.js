import each from 'lodash-es/each';
import Broadcast from '@objectivehtml/broadcast';
import GiveworksForm from '@/Components/GiveworksForm';
import script from 'vue-interface/src/Helpers/Script';
import Alert from 'vue-interface/src/Components/Alert';
import ActivityButton from 'vue-interface/src/Components/ActivityButton';
import InputField from 'vue-interface/src/Components/InputField';
import InputGroup from 'vue-interface/src/Components/InputGroup';
import InputGroupPrepend from 'vue-interface/src/Components/InputGroup/InputGroupPrepend';
import InputGroupText from 'vue-interface/src/Components/InputGroup/InputGroupText';
import FormControl from 'vue-interface/src/Components/FormControl';
import FormFeedback from 'vue-interface/src/Components/FormFeedback';
import FormGroup from 'vue-interface/src/Components/FormGroup';
import FormLabel from 'vue-interface/src/Components/FormLabel';
import RadioField from 'vue-interface/src/Components/RadioField';
import CheckboxField from 'vue-interface/src/Components/CheckboxField';
import SelectField from 'vue-interface/src/Components/SelectField';
import TextareaField from 'vue-interface/src/Components/TextareaField';
import mergeClasses from 'vue-interface/src/Plugins/MergeClasses';
import VuePlaceAutocomplete from 'vue-place-autocomplete';

const components = {
    Alert,
    ActivityButton,
    CheckboxField,
    FormControl,
    FormFeedback,
    FormGroup,
    FormLabel,
    InputField,
    InputGroup,
    InputGroupText,
    InputGroupPrepend,
    RadioField,
    SelectField,
    TextareaField
};

function livereload() {
    if(process.env.NODE_ENV === 'development') {
        const domain = (location.host || 'localhost').split(':')[0];
        const port = process.env.LIVERELOAD_OPTIONS && process.env.LIVERELOAD_OPTIONS.port;
        script(`https://${domain}:${port}/livereload.js?snipver=1`);
    }
}

export default function install(Vue, options) {
    Vue.prototype.$broadcast = new Broadcast;
    Vue.prototype.$dispatch = Vue.prototype.$broadcast.dispatch();

    each(components, (component, key) => {
        Vue.component(key, component);
    });

    Vue.use(mergeClasses);
    Vue.use(VuePlaceAutocomplete);
    Vue.component('giveworks-form', GiveworksForm);

    if(window && window.Vue) {
        const data = (
            window.GiveworksFormOptions && window.GiveworksFormOptions.data
        ) ? window.GiveworksFormOptions.data : {};

        const VueGiveworksForm = Vue.extend({
            components: {
                GiveworksForm
            }
        });

        window.App = new VueGiveworksForm({
            el: '#app',
            data() {
                return data;
            }
        });
    }

    livereload();
}