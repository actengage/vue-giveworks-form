<template>
    <div>
        <textarea-field
            :id="question.id"
            :autogrow="true"
            :label="`${question.question}${question.required ? '*' : ''}`"
            :placeholder="`${question.question}${question.required ? '*' : ''}`"
            :name="name"
            :required="question.required"
            :value="question.default_value"
            :errors="errors"
            custom
            @input="updated" />
    </div>
</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'SurveyTextareaField',

    components: {
        TextareaField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/TextareaField')
    },

    extends: SurveyField

};
</script>
