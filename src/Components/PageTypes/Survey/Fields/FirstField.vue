<template>

    <input-field
        id="first"
        name="first"
        placeholder="First Name"
        :value="value"
        :label="question.question"
        :errors="errors"
        @input="updated"
    />

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-toolbox/src/Mixins/FormControl';

export default {

    name: 'survey-first-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
