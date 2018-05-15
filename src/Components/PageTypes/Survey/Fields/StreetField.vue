<template>

    <place-autocomplete-field
        v-model="value"
        :errors="errors"
        :label="question.question"
        id="street"
        name="street"
        placeholder="Street Address"
        api-key="AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU"
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

export default {

    name: 'survey-street-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
