<template>

    <place-autocomplete-field
        v-model="form.street"
        id="street"
        name="street"
        api-key="AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU"
        :errors="errors"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :placeholder="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        v-place-autofill:street="form.street"
        v-place-autofill:city="form.city"
        v-place-autofill:state="form.state"
        v-place-autofill:zip="form.zip"
        @input="updated"
        custom
    />

</template>

<script>
import SurveyField from './SurveyField';
import PlaceAutofill from 'vue-place-autocomplete/src/PlaceAutofill';

export default {

    name: 'survey-street-field',

    extends: SurveyField,

    components: {
        PlaceAutocompleteField: () => import(/* webpackChunkName: "vue-place-autocomplete" */'vue-place-autocomplete/src/PlaceAutocompleteField'),
    },

    directives: {
        PlaceAutofill
    }

};
</script>
