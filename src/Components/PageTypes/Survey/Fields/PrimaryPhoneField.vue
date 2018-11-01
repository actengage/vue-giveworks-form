<template>

    <input-field
        v-model="form.phone"
        type="phone"
        name="phone"
        id="phone"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        @input="updated"
    />

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-interface/src/Mixins/FormControl';
import InputField from 'vue-interface/src/Components/InputField';

export default {

    name: 'survey-primary-phone-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ],

    components: {
        InputField
    }

};
</script>
