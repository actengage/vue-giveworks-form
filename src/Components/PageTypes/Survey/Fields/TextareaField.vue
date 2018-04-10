<template>

    <textarea-field :label="question.question" :name="`field_${question.id}`" :id="question.id" :errors="errors" @input="updated"/>

</template>

<script>
import SurveyField from './SurveyField';
import { FormControl } from 'vue-toolbox';

export default {

    name: 'survey-textarea-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
