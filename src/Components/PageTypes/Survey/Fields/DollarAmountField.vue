<template>

    <form-group>

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

    </form-group>

</template>

<script>
import chunk from 'lodash-es/chunk';
import SurveyField from './SurveyField';

export default {

    name: 'survey-dollar-amount-field',

    extends: SurveyField,

    computed: {


        amounts() {
            const values = this.question.answers ?
                this.question.answers.split('|') :
                this.page.site.config.giveworks.ask_amounts;

            return chunk(values.filter(value => {
                return value >= (parseFloat(this.page.options.min_amount) || 0);
            }), 2);
        }

    }

}
</script>
