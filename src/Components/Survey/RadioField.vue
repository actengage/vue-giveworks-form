<template>

    <form-group :class="{'is-invalid': !!invalidFeedback}">

        <label>
            {{question.question}} <sup v-if="question.required">*</sup>
        </label>

        <radio-field
            v-model="form[name]"
            v-for="(answer, key) in question.answers"
            :key="key"
            :label="answer"
            :value="answer"
            :checkedValue="value"
            :name="name"
            :id="`${name}_${key}`"
            @change="updated"
            custom
        />

        <template v-if="question.accept_other">
            <radio-field v-model="form[name]" v-changed value="other" label="Other:" :name="name" :id="`${name}_50`" :checkedValue="value" @change="updated"/>
            <input v-model="form[`${name}_other`]" type="text" class="form-control" :class="{'is-invalid': errors[name]}" :name="`${name}_other`" :id="`${name}_other`" @input="updated($event.target.value);"/>
        </template>

        <slot name="feedback">
            <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
            <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
        </slot>

    </form-group>

</template>

<script>
import SurveyField from './SurveyField';
import RadioField from '../Fields/RadioField';
import FormFeedback from 'vue-interface/src/Components/FormFeedback';

export default {

    name: 'survey-radio-field',

    extends: SurveyField,

    components: {
        RadioField,
        FormFeedback
    }

};
</script>
