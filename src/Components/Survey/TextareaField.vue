<template>

    <textarea-field
        v-model="form[name]"
        v-query
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

export default {

    name: 'survey-textarea-field',

    extends: SurveyField,

    components: {
        TextareaField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/TextareaField')
    }

};
</script>
