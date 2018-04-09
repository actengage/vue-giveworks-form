<template>

    <input-field :name="street" id="street" placeholder="Street Address" :label="question.question" :errors="errors" @input="updated" />

</template>

<script>
import SurveyField from './SurveyField';
import { FormControl } from 'vue-toolbox';

export default {

    name: 'survey-street-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
