<template>

    <textarea-field
        v-autogrow
        :value="value"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :name="`field_${question.id}`"
        :required="question.required"
        :id="question.id"
        :errors="errors"
        @input="updated"
    />

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-interface/src/Mixins/FormControl';

export default {

    name: 'survey-textarea-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
