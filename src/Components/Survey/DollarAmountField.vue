<template>

    <div class="form-group">

        <fieldset>

            <legend>Select an amount</legend>

            <div v-for="(chunk, i) in amounts" :key="i" class="row">
                <div v-for="amount in chunk" :key="amount" class="col-sm-6">
                    <radio-field v-model="form.donation" name="donation" :label="amount" :value="amount" custom/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <label :for="question.id" v-html="question.question"/>
                    <input-group prepend="$">
                        <input
                            type="text"
                            class="form-control"
                            :name="name"
                            :value="value"
                            :class="{'is-invalid': !!invalidFeedback}"
                            :required="question.required"
                        />
                    </input-group>
                </div>
            </div>

        </fieldset>

    </div>

</template>

<script>
import SurveyField from './SurveyField';
import { chunk } from 'vue-interface/src/Helpers/Functions';

export default {

    name: 'survey-dollar-amount-field',

    extends: SurveyField,

    components: {
        InputGroup: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputGroup'),
        RadioField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/RadioField')
    },

    computed: {

        amounts() {
            const values = this.question.answers
                ? this.question.answers.split('|')
                : this.page.site.config.giveworks.ask_amounts;

            return chunk(values.filter(value => {
                return value >= (parseFloat(this.page.options.min_amount) || 0);
            }), 2);
        }

    }

};
</script>
