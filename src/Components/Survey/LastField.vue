<template>

    <input-field
        v-model="form.last"
        id="last"
        name="last"
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

    name: 'survey-last-field',

    extends: SurveyField,

    components: {
        InputField
    }

};
</script>
