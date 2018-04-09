<template>

    <input-field type="email" name="email" placeholder="Email Address" id="email" :label="question.question" :errors="errors" @input="updated" />

</template>

<script>
import SurveyField from './SurveyField';
import { FormControl } from 'vue-toolbox';

export default {

    name: 'survey-primary-email-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
