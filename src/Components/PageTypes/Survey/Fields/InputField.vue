<template>

    <input-field
        :name="name"
        :value="value"
        :id="question.id"
        :label="question.question"
        :errors="errors" @input="updated"
    />

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-toolbox/src/Mixins/FormControl';

export default {

    name: 'survey-input-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
