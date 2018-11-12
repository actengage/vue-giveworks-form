<template>

    <input-field
        v-model="form.phone"
        type="phone"
        name="phone"
        id="phone"
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

    name: 'survey-primary-phone-field',

    extends: SurveyField,

    components: {
        InputField
    }

};
</script>
