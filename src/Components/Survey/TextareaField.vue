<template>

    <textarea-field
        v-model="form[name]"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :placeholder="`${question.question}${question.required ? '*' : ''}`"
        :name="name"
        :required="question.required"
        :id="question.id"
        :errors="errors"
        @input="updated"
        custom
    />

</template>

<script>
import SurveyField from './SurveyField';
// import Autogrow from 'vue-interface/src/Directives/Autogrow';
import TextareaField from '../Fields/TextareaField';

export default {

    name: 'survey-textarea-field',

    extends: SurveyField,

    components: {
        TextareaField
    },

    directives: {
        // Autogrow
    }

};
</script>
