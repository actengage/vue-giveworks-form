<template>
    <div>
        <select-field
            :id="question.id"
            v-model="form[name]"
            :label="`${question.question}${question.required ? '*' : ''}`"
            :name="name"
            :errors="errors"
            :required="question.required"
            :default-value="question.default_value"
            custom
            @input="updated">
            <option v-for="(value, key) in question.answers" :key="key">
                {{ value }}
            </option>
        </select-field>
    </div>
</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'SurveySelectField',

    components: {
        SelectField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/SelectField')
    },

    extends: SurveyField

};
</script>
