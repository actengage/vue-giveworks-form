<template>

    <place-autocomplete-field
        v-model="form.street"
        id="street"
        name="street"
        placeholder="Street Address"
        api-key="AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU"
        :errors="errors"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        v-place-autofill:street="form.street"
        v-place-autofill:city="form.city"
        v-place-autofill:state="form.state"
        v-place-autofill:zip="form.zip"
        @input="updated"
    />

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-interface/src/Mixins/FormControl';
import { PlaceAutofill, PlaceAutocompleteField } from 'vue-place-autocomplete';

export default {

    name: 'survey-street-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ],

    components: {
        PlaceAutocompleteField
    },

    directives: {
        PlaceAutofill
    }

};
</script>
