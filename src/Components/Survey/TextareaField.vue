<template>
    <textarea-field
        :id="question.id"
        v-model="form[name]"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :placeholder="`${question.question}${question.required ? '*' : ''}`"
        :name="name"
        :required="question.required"
        :errors="errors"
        custom
        @input="updated" />
</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'SurveyTextareaField',

    components: {
        TextareaField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/TextareaField')
    },

    extends: SurveyField

};
</script>
