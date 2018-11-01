<template>

    <select-field
        v-model="form.state"
        name="state"
        :id="question.id"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        @input="updated">
        <option v-for="(label, value) in page.site.config.states" :value="value" v-html="label"/>
    </select-field>

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-interface/src/Mixins/FormControl';
import SelectField from 'vue-interface/src/Components/SelectField';

export default {

    name: 'survey-state-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ],

    components: {
        SelectField
    }

};
</script>
