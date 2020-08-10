<template>
    <input-field
        id="street"
        v-model="form.street"
        v-query
        name="street"
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
import Query from '../../Directives/Query';

export default {

    name: 'SurveyStreetField',

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField'),
    },

    directives: {
        PlaceAutofill
    },

    extends: SurveyField

};
</script>
