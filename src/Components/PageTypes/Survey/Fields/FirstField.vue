<template>

    <input-field
        id="first"
        name="first"
        placeholder="First Name"
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

    name: 'survey-first-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
