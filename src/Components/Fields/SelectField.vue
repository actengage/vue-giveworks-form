<template>

    <select-field
        v-model="form[name]"
        :label="`${question.question}${question.required ? '*' : ''}`"
        :name="name"
        :id="question.id"
        :errors="errors"
        :required="question.required"
        @input="updated">
        <option v-for="(value, key) in question.answers" :value="value" v-html="value"/>
    </select-field>

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-interface/src/Mixins/FormControl';
import SelectField from 'vue-interface/src/Components/SelectField';

export default {

    name: 'select-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ],

    components: {
        SelectField
    }

};
</script>
