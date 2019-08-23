<template>
    <input-field
    :id="question.id"
    v-model="form[name]"
    v-query
    type="phone"
    :name="name"
    :label="`${question.question}${question.required ? '*' : ''}`"
    :required="question.required"
    :errors="errors"
    custom
    @input="updated" />
</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'SurveyAltPhoneField',

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField'),
    },

    extends: SurveyField

};
</script>
