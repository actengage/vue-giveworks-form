<template>

    <input-field
        id="city"
        name="city"
        placeholder="City"
        :value="value"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        @input="updated"
    />

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-interface/src/Mixins/FormControl';

export default {

    name: 'survey-city-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
