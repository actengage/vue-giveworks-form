<template>

    <input-field
        v-model="form[name]"
        :name="name"
        :id="question.id"
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

    name: 'survey-input-field',

    extends: SurveyField,

    components: {
        InputField
    }

};
</script>
