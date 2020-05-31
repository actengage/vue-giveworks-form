<template>
    <input-field
        :id="question.id"
        v-model="form[name]"
        v-query
        :name="name"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :placeholder="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :value="question.default_value"
        :errors="errors"
        custom
        @input="updated" />
</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'SurveyInputField',

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField'),
    },

    extends: SurveyField

};
</script>
