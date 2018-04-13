<template>

    <select-field :value="value" :label="question.question" :name="`field_${question.id}`" :id="question.id" :errors="errors" @input="updated">
        <option v-for="(value, key) in question.answers" :value="value" v-html="value"/>
    </select-field>

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-interface/src/Mixins/FormControl';

export default {

    name: 'survey-select-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
