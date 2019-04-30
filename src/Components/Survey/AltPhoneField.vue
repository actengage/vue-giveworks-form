<template>

    <input-field
        v-model="form[name]"
        type="phone"
        :name="name"
        :id="question.id"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        @input="updated"
        custom
    />

</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'survey-alt-phone-field',

    extends: SurveyField,

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField'),
    }

};
</script>
