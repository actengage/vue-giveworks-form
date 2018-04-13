<template>

    <form-group :class="{'is-invalid': !!invalidFeedback}">

        <label v-html="question.question">
            {{question.question}}
            <sup v-if="question.required">*</sup>
        </label>

        <radio-field v-for="(answer, key) in question.answers" :key="key" :value="answer" :checkedValue="value" :name="name" :id="`${name}_${key}`" @change="updated">
            {{ answer }}
        </radio-field>

        <radio-field v-changed value="other" :name="name" :id="`${name}_50`" :checkedValue="value" @change="updated">
            Other:
        </radio-field>

        <input type="text" class="form-control" :class="{'is-invalid': errors[name]}" :name="`${name}_other`" :id="`${name}_other`" @input="updated($event.target.value);">

        <slot name="feedback">
            <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
            <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
        </slot>

    </form-group>

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-interface/src/Mixins/FormControl';

export default {

    name: 'survey-radio-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
