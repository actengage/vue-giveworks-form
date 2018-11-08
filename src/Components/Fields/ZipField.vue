<template>

    <input-field
        v-model="form.zip"
        id="zip"
        name="zip"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        maxlength="9"
        placeholder="Zip Code (5 digits)"
        x_autocompletetype="postal-code"
        @input="updated"
    />

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-interface/src/Mixins/FormControl';
import InputField from 'vue-interface/src/Components/InputField';

export default {

    name: 'zip-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ],

    components: {
        InputField
    }

};
</script>
