<template>

    <input-field
        v-model="form.phone"
        v-query
        type="phone"
        name="phone"
        id="phone"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :placeholder="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        @input="updated"
        custom
    />

</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'survey-primary-phone-field',

    extends: SurveyField,

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField')
    }

};
</script>
