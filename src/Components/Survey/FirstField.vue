<template>

    <input-field
        v-model="form.first"
        id="first"
        name="first"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :placeholder="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        @input="updated"
        custom
    />

</template>

<script>
import SurveyField from './SurveyField';
import InputField from '../Fields/InputField';

export default {

    name: 'survey-first-field',

    extends: SurveyField,

    components: {
        InputField
    }

};
</script>
