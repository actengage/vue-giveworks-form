<template>
    <place-autocomplete-field
    id="street"
    v-model="form.street"
    v-query
    v-place-autofill:street="form.street"
    v-place-autofill:city="form.city"
    v-place-autofill:state="form.state"
    v-place-autofill:zip="form.zip"
    name="street"
    :api-key="mapApiKey"
    :errors="errors"
    :label="`${question.question}${question.required ? '*' : ''}`"
    :placeholder="`${question.question}${question.required ? '*' : ''}`"
    :required="question.required"
    custom
    @input="updated" />
</template>

<script>
import SurveyField from './SurveyField';
import GoogleMapsApiKey from '../../Mixins/GoogleMapsApiKey';
import PlaceAutofill from 'vue-place-autocomplete/src/Directives/PlaceAutofill';

export default {

    name: 'SurveyStreetField',

    components: {
        PlaceAutocompleteField: () => import(/* webpackChunkName: "vue-place-autocomplete" */'vue-place-autocomplete/src/PlaceAutocompleteField'),
    },

    directives: {
        PlaceAutofill
    },

    extends: SurveyField,

    mixins: [
        GoogleMapsApiKey
    ],

    computed: {
        apiKey() {
            return process.env.VUE_APP_GOOGLE_MAPS_KEY;
        }
    }

};
</script>
