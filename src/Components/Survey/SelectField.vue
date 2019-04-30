<template>

    <select-field
        v-model="form[name]"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :name="name"
        :id="question.id"
        :errors="errors"
        :required="question.required"
        @input="updated"
        custom>
        <option v-for="(value, key) in question.answers" :value="value" v-html="value"/>
    </select-field>

</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'survey-select-field',

    extends: SurveyField,

    components: {
        SelectField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/SelectField')
    }

};
</script>
