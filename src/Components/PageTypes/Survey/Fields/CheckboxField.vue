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
            @change="updated"/>

        <template v-if="question.accept_other">
            <checkbox-field v-model="form[name]" v-changed label="Other:" value="other" :name="name" :id="`${name}_50`" :checkedValues="value || []" @change="updated"/>
            <input v-model="form[`${name}_other`]" type="text" class="form-control" :class="{'is-invalid': errors[name]}" :name="`${name}_other`" :id="`${name}_other`" @input="updated($event.target.value)">
        </template>

        <slot name="feedback">
            <form-feedback v-if="validFeedback" v-html="validFeedback" valid />
            <form-feedback v-if="invalidFeedback" v-html="invalidFeedback" invalid />
        </slot>

    </div>

</template>

<script>
import SurveyField from './SurveyField';
import FormControl from 'vue-interface/src/Mixins/FormControl';
import FormFeedback from 'vue-interface/src/Components/FormFeedback';
import CheckboxField from 'vue-interface/src/Components/CheckboxField';

export default {

    name: 'survey-checkbox-field',

    extends: SurveyField,

    mixins: [
        FormControl
    ],

    components: {
        FormFeedback,
        CheckboxField
    }

};
</script>
