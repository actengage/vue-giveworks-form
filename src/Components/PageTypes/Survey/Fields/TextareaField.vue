<template>

    <textarea-field
        v-autogrow
        v-model="form[name]"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :name="name"
        :required="question.required"
        :id="question.id"
        :errors="errors"
        @input="updated"
    />

</template>

<script>
import SurveyField from './SurveyField';
import Autogrow from 'vue-interface/src/Directives/Autogrow';
import FormControl from 'vue-interface/src/Mixins/FormControl';
import TextareaField from 'vue-interface/src/Components/TextareaField';

export default {

    name: 'survey-textarea-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ],

    components: {
        TextareaField
    },

    directives: {
        Autogrow
    }

};
</script>
