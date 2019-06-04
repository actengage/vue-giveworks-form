<template>

    <input-field
        v-model="form[name]"
        v-query
        type="email"
        :name="name"
        :id="question.id"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :placeholder="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        @input="updated"
        custom
    />

</div>

</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'survey-alt-email-field',

    extends: SurveyField,

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField'),
    }

};
</script>
