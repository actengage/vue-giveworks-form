<template>

    <place-autocomplete-field
        v-model="form.street"
        v-query
        id="street"
        name="street"
        :api-key="mapApiKey"
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
import GoogleMapsApiKey from '../../Mixins/GoogleMapsApiKey';
import PlaceAutofill from 'vue-place-autocomplete/src/Directives/PlaceAutofill';

export default {

    name: 'survey-street-field',

    extends: SurveyField,

    mixins: [
        GoogleMapsApiKey
    ],

    components: {
        PlaceAutocompleteField: () => import(/* webpackChunkName: "vue-place-autocomplete" */'vue-place-autocomplete/src/PlaceAutocompleteField'),
    },

    directives: {
        PlaceAutofill
    },

    computed: {
        apiKey() {
            return process.env.VUE_APP_GOOGLE_MAPS_KEY;
        }
    }

};
</script>
