<template>

    <input-field
        type="phone"
        name="phone"
        id="phone"
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

    name: 'survey-primary-phone-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
