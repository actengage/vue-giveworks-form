<template>
    <input-field
    id="zip"
    v-model="form.zip"
    v-query
    :label="`${question.question}${question.required ? '*' : ''}`"
    :placeholder="`${question.question}${question.required ? '*' : ''}`"
    :required="question.required"
    :errors="errors"
    name="zip"
    maxlength="9"
    x_autocompletetype="postal-code"
    custom
    @input="updated" />
</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'SurveyZipField',

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField')
    },

    extends: SurveyField

};
</script>
