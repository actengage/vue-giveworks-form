<template>
    <form-group :class="{'is-invalid': !!invalidFeedback}">
        <label>
            {{ question.question }}
            <sup v-if="question.required">*</sup>
        </label>

        <checkbox-field
            v-for="(answer, key) in question.answers"
            :id="`${name}_${key}`"
            :key="key"
            v-model="form[name]"
            v-query
            :label="answer"
            :value="answer"
            :checked-values="value || []"
            :required="question.required"
            :name="name"
            custom
            @input="updated" />

        <template v-if="question.accept_other">
            <checkbox-field
                :id="`${name}_50`"
                v-model="form[name]"
                v-changed
                v-query
                label="Other:"
                value="other"
                :name="name"
                :checked-values="value || []"
                custom
                @input="updated" />

            <input-field
                :id="`${name}_other`"
                v-model="form[`${name}_other`]"
                v-query
                type="text"
                label="Other"
                placeholder="Other"
                class="mt-2"
                :class="{'is-invalid': errors[name]}"
                :name="`${name}_other`"
                custom
                @input="updated" />
        </template>

        <slot name="feedback">
            <form-feedback v-if="validFeedback" valid v-html="validFeedback" />
            <form-feedback v-if="invalidFeedback" invalid v-html="invalidFeedback" />
        </slot>
    </form-group>
</template>

<script>
import SurveyField from './SurveyField';

export default {

    name: 'SurveyCheckboxField',

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField'),
        FormFeedback: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/FormFeedback'),
        CheckboxField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/CheckboxField')
    },

    extends: SurveyField

};
</script>
