<template>

    <input-field
        v-model="form[name]"
        type="email"
        :name="name"
        :id="question.id"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :placeholder="`${question.question}${question.required ? '*' : ''}`"
        :required="question.required"
        :errors="errors"
        @input="updated"
        custom
    />

</div>

</template>

<script>
import SurveyField from './SurveyField';
import InputField from '../Fields/InputField';

export default {

    name: 'survey-alt-email-field',

    extends: SurveyField,

    components: {
        InputField
    }

};
</script>
