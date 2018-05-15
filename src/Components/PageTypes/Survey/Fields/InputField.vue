<template>

    <input-field
        :name="name"
        :id="question.id"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :value="value"
        :errors="errors"
        @input="updated"/>

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-interface/src/Mixins/FormControl';

export default {

    name: 'survey-input-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
