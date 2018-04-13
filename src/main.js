import each from 'lodash-es/each';
import script from 'vue-interface/src/Helpers/Script';
import GiveworksForm from '@/Components/GiveworksForm';
import GiveworksFormPlugin from '@/Plugins/GiveworksForm';
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

const components = {
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

each(components, (component, key) => {
    Vue.component(key, component);
});

Vue.use(mergeClasses);
Vue.use(GiveworksFormPlugin);

if(process.env.NODE_ENV === 'development') {
    const domain = (location.host || 'localhost').split(':')[0];
    const port = process.env.LIVERELOAD_OPTIONS && process.env.LIVERELOAD_OPTIONS.port;
    script(`https://${domain}:${port}/livereload.js?snipver=1`);
}

export default Vue.extend({

    components: {
        GiveworksForm
    }

});
