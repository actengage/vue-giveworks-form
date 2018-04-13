<template>

    <input-field
        id="street"
        placeholder="Street Address"
        :value="value"
        :name="street"
        :label="question.question"
        :errors="errors"
        @input="updated"
    />

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-interface/src/Mixins/FormControl';

export default {

    name: 'survey-street-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
