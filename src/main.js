import each from 'lodash-es/each';
import script from 'vue-toolbox/src/Helpers/Script';
import GiveworksForm from '@/Components/GiveworksForm';
import GiveworksFormPlugin from '@/Plugins/GiveworksForm';
import ActivityButton from 'vue-toolbox/src/Components/ActivityButton';
import InputField from 'vue-toolbox/src/Components/InputField';
import InputGroup from 'vue-toolbox/src/Components/InputGroup';
import InputGroupPrepend from 'vue-toolbox/src/Components/InputGroup/InputGroupPrepend';
import InputGroupText from 'vue-toolbox/src/Components/InputGroup/InputGroupText';
import FormControl from 'vue-toolbox/src/Components/FormControl';
import FormFeedback from 'vue-toolbox/src/Components/FormFeedback';
import FormGroup from 'vue-toolbox/src/Components/FormGroup';
import FormLabel from 'vue-toolbox/src/Components/FormLabel';
import RadioField from 'vue-toolbox/src/Components/RadioField';
import CheckboxField from 'vue-toolbox/src/Components/CheckboxField';
import SelectField from 'vue-toolbox/src/Components/SelectField';
import TextareaField from 'vue-toolbox/src/Components/TextareaField';
import mergeClasses from 'vue-toolbox/src/Plugins/MergeClasses';

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
