<template>

    <input-field
        v-model="form.city"
        id="city"
        name="city"
        placeholder="City"
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

    name: 'city-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ],

    components: {
        InputField
    }

};
</script>
