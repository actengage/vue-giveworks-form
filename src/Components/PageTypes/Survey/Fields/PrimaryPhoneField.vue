<template>

    <input-field type="phone" name="phone" id="phone" :label="question.question" :errors="errors" @input="updated" />

</template>

<script>
import SurveyField from './SurveyField';
import { FormControl } from 'vue-toolbox';

export default {

    name: 'survey-primary-phone-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
