<template>

    <input-field type="email" placeholder="Email Address" :name="name" :id="question.id" :label="question.question" :errors="errors" @input="updated" />

</template>

<script>
import SurveyField from './SurveyField';
import { FormControl } from 'vue-toolbox';

export default {

    name: 'survey-alt-email-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
