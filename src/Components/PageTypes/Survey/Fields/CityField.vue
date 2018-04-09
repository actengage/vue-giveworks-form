<template>

    <input-field :name="city" id="city" placeholder="City" :label="question.question" :errors="errors" @input="updated" />

</template>

<script>
import SurveyField from './SurveyField';
import { FormControl } from 'vue-toolbox';

export default {

    name: 'survey-city-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
