<template>

    <input-field
        id="last"
        name="last"
        placeholder="Last Name"
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

    name: 'survey-last-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
