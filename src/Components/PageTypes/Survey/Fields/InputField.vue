<template>

    <input-field :name="`field_${question.id}`" :id="question.id" :label="question.question" :errors="errors" @input="updated" />

</template>

<script>
import SurveyField from './SurveyField';
import { FormControl } from 'vue-toolbox';

export default {

    name: 'survey-input-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
