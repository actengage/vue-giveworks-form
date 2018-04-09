<template>

    <div>

        <div class="row">
            <div class="col-sm-12" v-html="page.body"/>
        </div>

        <div class="row">

            <div v-for="(chunk, i) in questions" class="col-md-4">

                <div v-for="question in chunk">
                    <component v-model="form[`field_${question.id}`]"
                        v-model="form[`field_${question.id}`]"
                        :is="component(question.type)"
                        :name="`field_${question.id}`"
                        :page="page"
                        :errors="errors"
                        :question="question"
                    />
                </div>

                <activity-button
                    v-if="i === 2"
                    size="lg"
                    type="submit"
                    :block="true"
                    orientation="right"
                    :activity="submitting"
                    :label="buttonLabel || page.site.config.giveworks.button.survey"
                />


            </div>

        </div>

    </div>

</template>

<script>
import { chunk } from 'lodash';
import VerticalSurveyForm from './VerticalSurveyForm';

export default {

    extends: VerticalSurveyForm,

    computed: {

        questions() {
            return chunk(this.page.questions, Math.ceil(this.page.questions.length / 3));
        }

    }

}
</script>
