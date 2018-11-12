<template>

    <select-field
        v-model="form.state"
        name="state"
        :id="question.id"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        @input="updated"
        custom>
        <option v-for="(label, value) in page.site.config.states" :value="value" v-html="label"/>
    </select-field>

</template>

<script>
import SurveyField from './SurveyField';
import SelectField from '../Fields/SelectField';

export default {

    name: 'survey-state-field',

    extends: SurveyField,

    components: {
        SelectField
    }

};
</script>
