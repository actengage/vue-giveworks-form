<template>

    <form-group>

        <fieldset>

            <legend>Select an amount</legend>

            <div v-for="chunk in amounts" class="row">
                <div v-for="amount in chunk" class="col-sm-6">
                    <radio-field name="donation" :value="amount">${{ amount }}</radio-field>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <label :for="question.id" v-html="question.question"/>
                    <input-group>
                        <input-group-prepend text>$</input-group-prepend>
                        <input type="text" :name="`field_${question.id}`" :value="value" class="form-control"/>
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
