<template>

    <input-field
        v-model="form[name]"
        type="phone"
        :name="name"
        :id="question.id"
        :label="`${question.question}${question.required ? '*' : ''}`"
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

    name: 'survey-alt-phone-field',

    extends: SurveyField,

    components: {
        InputField
    }

};
</script>
