<template>

    <input-field
        v-model="form.first"
        id="first"
        name="first"
        placeholder="First Name"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
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
