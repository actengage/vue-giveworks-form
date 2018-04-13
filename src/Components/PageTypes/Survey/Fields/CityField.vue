<template>

    <input-field
        name="city"
        id="city"
        placeholder="City"
        :value="value"
        :label="question.question"
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
