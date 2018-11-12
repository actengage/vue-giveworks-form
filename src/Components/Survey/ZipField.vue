<template>

    <input-field
        v-model="form.zip"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :placeholder="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        id="zip"
        name="zip"
        maxlength="9"
        x_autocompletetype="postal-code"
        @input="updated"
        custom
    />

</template>

<script>
import SurveyField from './SurveyField';
import InputField from '../Fields/InputField';

export default {

    name: 'survey-zip-field',

    extends: SurveyField,

    components: {
        InputField
    }

};
</script>
