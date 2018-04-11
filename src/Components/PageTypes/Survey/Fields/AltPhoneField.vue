<template>

    <input-field
        type="phone"
        :name="name"
        :value="value"
        :id="question.id"
        :label="question.question"
        :errors="errors"
        @input="updated"
    />

</template>

<script>
import SurveyField from './SurveyField';
import { FormControl } from 'vue-toolbox';

export default {

    name: 'survey-alt-phone-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
