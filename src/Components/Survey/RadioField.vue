<template>
    <form-group :class="{'is-invalid': !!invalidFeedback}">
        <label>
            {{ question.question }} <sup v-if="question.required">*</sup>
        </label>

        <radio-field
        v-for="(answer, key) in question.answers"
        :id="`${name}_${key}`"
        :key="key"
        v-model="form[name]"
        v-query
        :label="answer"
        :value="answer"
        :checked-value="value"
        :name="name"
        custom
        @change="updated" />

        <template v-if="question.accept_other">
            <radio-field :id="`${name}_50`"
            v-model="form[name]"
            v-changed
            value="other"
            label="Other:"
            :name="name"
            :checked-value="value"
            @change="updated" />
            <input :id="`${name}_other`"
            v-model="form[`${name}_other`]"
            type="text"
            class="form-control"
            :class="{'is-invalid': errors[name]}"
            :name="`${name}_other`"
            @input="updated($event.target.value);">
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

    name: 'SurveyRadioField',

    components: {
        RadioField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/RadioField'),
        FormFeedback: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/FormFeedback')
    },

    extends: SurveyField

};
</script>
