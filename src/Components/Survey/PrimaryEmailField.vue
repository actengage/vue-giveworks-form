<template>
    <input-field
        id="email"
        v-model="form.email"
        v-query
        type="email"
        name="email"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :placeholder="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        custom
        @input="updated" />
</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'SurveyPrimaryEmailField',

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField')
    },

    extends: SurveyField

};
</script>
