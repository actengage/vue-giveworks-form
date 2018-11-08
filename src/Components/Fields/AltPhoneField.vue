<template>

    <input-field
        v-model="form[name]"
        type="phone"
        :name="name"
        :id="question.id"
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

    name: 'alt-phone-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ],

    components: {
        InputField
    }

};
</script>
