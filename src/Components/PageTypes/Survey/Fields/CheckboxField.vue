<template>

    <form-group :class="{'is-invalid': !!invalidFeedback}">

        <label>
            {{question.question}}
            <sup v-if="question.required">*</sup>
        </label>

        <checkbox-field v-for="(answer, key) in question.answers" :key="key" :value="answer" :checkedValues="value || []" :name="name" :id="`${name}_${key}`" @change="updated">
            {{ answer }}
        </checkbox-field>

        <template v-if="question.accept_other">
            <checkbox-field v-changed label="Other:" value="other" :name="name" :id="`${name}_50`" :checkedValues="value || []" @change="updated"/>
            <input type="text" class="form-control" :class="{'is-invalid': errors[name]}" :name="`${name}_other`" :id="`${name}_other`" @input="updated($event.target.value)">
        </template>
        
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

    name: 'survey-checkbox-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ]

}
</script>
