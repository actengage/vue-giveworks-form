<template>
    <input-field
        id="phone"
        v-model="form.phone"
        v-query
        type="phone"
        name="phone"
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

    name: 'SurveyPrimaryPhoneField',

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField')
    },

    extends: SurveyField

};
</script>
