<template>
    <select-field
        :id="question.id"
        v-model="form.state"
        v-query
        name="state"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        :value="question.default_value"
        custom
        @input="updated">
        <option v-for="(label, value) in page.site.config.states" :key="label" :value="value" v-html="label" />
    </select-field>
</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'SurveyStateField',

    components: {
        SelectField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/SelectField')
    },

    extends: SurveyField

};
</script>
