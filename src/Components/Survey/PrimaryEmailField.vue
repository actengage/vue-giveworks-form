<template>

    <input-field
        v-model="form.email"
        type="email"
        name="email"
        id="email"
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

    name: 'survey-primary-email-field',

    extends: SurveyField,

    components: {
        InputField
    }

};
</script>
