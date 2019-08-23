<template>
    <select-field
    :id="question.id"
    v-model="form[name]"
    v-query
    :label="`${question.question}${question.required ? '*' : ''}`"
    :name="name"
    :errors="errors"
    :required="question.required"
    custom
    @input="updated">
        <option v-for="(value, key) in question.answers" :value="value" v-html="value" />
    </select-field>
</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'SurveySelectField',

    components: {
        SelectField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/SelectField')
    },

    extends: SurveyField

};
</script>
