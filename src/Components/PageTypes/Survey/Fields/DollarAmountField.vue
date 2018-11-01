<template>

    <div class="form-group">

        <fieldset>

            <legend>Select an amount</legend>

            <div v-for="chunk in amounts" class="row">
                <div v-for="amount in chunk" class="col-sm-6">
                    <radio-field v-model="form.donation" name="donation" :label="amount" :value="amount"/>
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
                            :required="question.required"/>
                    </input-group>
                </div>
            </div>

        </fieldset>

    </div>

</template>

<script>
import SurveyField from './SurveyField';
import InputGroup from 'vue-interface/src/Components/InputGroup';
import RadioField from 'vue-interface/src/Components/RadioField';
import { chunk } from 'vue-interface/src/Helpers/Functions';

export default {

    name: 'survey-dollar-amount-field',

    extends: SurveyField,

    components: {
        InputGroup,
        RadioField
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
