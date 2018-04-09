<template>

    <input-field id="first" name="first" placeholder="First Name" :label="question.question" :errors="errors" @input="updated" />

</template>

<script>
import SurveyField from './SurveyField';
import { FormControl } from 'vue-toolbox';

export default {

    name: 'survey-first-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
