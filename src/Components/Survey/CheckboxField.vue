<template>

    <div class="form-group" :class="{'is-invalid': !!invalidFeedback}">

        <label>
            {{question.question}}
            <sup v-if="question.required">*</sup>
        </label>

        <checkbox-field
            v-model="form[name]"
            v-for="(answer, key) in question.answers"
            :key="key"
            :label="answer"
            :value="answer"
            :checkedValues="value || []"
            :name="name"
            :id="`${name}_${key}`"
            @input="updated"
            custom
        />

        <template v-if="question.accept_other">
            <checkbox-field
                v-changed
                v-model="form[name]"
                label="Other:"
                value="other"
                :name="name"
                :id="`${name}_50`"
                :checkedValues="value || []"
                @input="updated"
                custom
            />

            <input-field
                v-model="form[`${name}_other`]"
                type="text"
                label="Other"
                placeholder="Other"
                class="mt-2"
                :class="{'is-invalid': errors[name]}"
                :name="`${name}_other`"
                :id="`${name}_other`"
                @input="updated"
                custom
            />
        </template>

        <slot name="feedback">
            <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
            <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
        </slot>

    </div>

</template>

<script>
import SurveyField from './SurveyField';
import InputField from '../Fields/InputField';
import CheckboxField from '../Fields/CheckboxField';
import FormFeedback from 'vue-interface/src/Components/FormFeedback';

export default {

    name: 'survey-checkbox-field',

    extends: SurveyField,

    components: {
        CheckboxField,
        FormFeedback,
        InputField
    }

};
</script>
