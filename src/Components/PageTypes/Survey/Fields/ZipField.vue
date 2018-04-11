<template>

    <input-field
        id="zip"
        name="zip"
        :value="value"
        :label="question.question"
        :errors="errors"
        placeholder="Zip Code (5 digits)"
        x_autocompletetype="postal-code"
        @input="updated"
    />

</template>

<script>
import SurveyField from './SurveyField';
import { FormControl } from 'vue-toolbox';

export default {

    name: 'survey-zip-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
