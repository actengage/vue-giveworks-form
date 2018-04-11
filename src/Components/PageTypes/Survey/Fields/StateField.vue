<template>

    <select-field name="state" :value="value" :id="question.id" :label="question.question" :errors="errors" @input="updated">
        <option v-for="(label, value) in page.site.config.states" :value="value" v-html="label"/>
    </select-field>

</template>

<script>
import SurveyField from './SurveyField';
import { FormControl } from 'vue-toolbox';

export default {

    name: 'survey-state-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
