<template>

    <div>

        <template v-for="(chunk, i) in questions">

            <div v-for="question in chunk">
                <component
                    v-model="form[name(question)]"
                    :is="component(question.type)"
                    :name="name(question)"
                    :page="page"
                    :form="form"
                    :value="form[name(question)]"
                    :errors="errors"
                    :question="question"/>
            </div>

            <btn-activity
                v-if="i === 2"
                size="lg"
                type="submit"
                :block="true"
                orientation="right"
                :activity="submitting"
                :label="buttonLabel || page.site.config.giveworks.button.survey"/>

        </template>

    </div>

</template>

<script>
import chunk from 'lodash-es/chunk';
import VerticalSurveyForm from './VerticalSurveyForm';

const RESERVED_FIELDS = [
    'email',
    'phone',
    'first',
    'last',
    'street',
    'city',
    'state',
    'zip'
];

export default {

    extends: VerticalSurveyForm,

    methods: {

        name(question) {
            return RESERVED_FIELDS.indexOf(question.type) !== -1 ? question.type : `field_${question.id}`;
        }

    },

    computed: {

        questions() {
            return chunk(this.page.questions, Math.ceil(this.page.questions.length / 3));
        }

    }

}
</script>
