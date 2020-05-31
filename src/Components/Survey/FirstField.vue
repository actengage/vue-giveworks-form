<template>
    <input-field
        id="first"
        v-model="form.first"
        v-query
        name="first"
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

    name: 'SurveyFirstField',

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField')
    },

    extends: SurveyField

};
</script>
