<template>

    <fieldset>

        <legend :class="{'mb-0': hasMinimumAmount}">Select your donation amount</legend>

        <div v-if="hasMinimumAmount" class="mb-2">
            <small class="text-muted">Minimum accepted amount is ${{ page.options.min_amount }}</small>
        </div>

        <payment-buttons v-model="form.amount" name="amount" :amounts="amounts" :errors="errors"/>

        <div class="form-group mt-3" v-if="page.site.recurring && !page.options.recurring_only">
            <label v-html="recurringMessage"/>

            <toggle-button size="lg" v-model="form.recurring"/>

            <small v-if="!recurring" class="text-muted form-text">You are making a single donation of the amount entered above. Click the 'monthly' button to make your gift go further as an automatic monthly donation.</small>
            <small v-if="!!recurring" class="text-muted form-text">This amount will be charged automatically once each month, on or about the {{ chargeDate }}. You may cancel your donation at any time by contacting us.</small>
        </div>
        <alert variant="warning" class="mt-3" v-else-if="page.site.recurring && page.options.recurring_only">
            <alert-heading><icon icon="exclamation-triangle"/> Monthly Donation</alert-heading>
            <div v-if="page.options.recur_message" v-html="page.options.recur_message"/>
            <div v-else>
                Please note that this will be a monthly recurring donation. The amount you select will be charged automatically once each month on or about the {{ chargeDate }}.  You may cancel your donation at any time by contacting us.
            </div>
        </alert>

    </fieldset>

</template>

<script>
import '../../Config/Icons';
import ToggleButton from '../Fields/ToggleButton';
import PaymentButtons from '../Fields/PaymentButtons';
import FormComponent from '../../Mixins/FormComponent';
import Alert from 'vue-interface/src/Components/Alert';
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';
import AlertHeading from 'vue-interface/src/Components/Alert/AlertHeading';

export default {

    name: 'select-donation-fieldset',

    components: {
        Icon,
        Alert,
        AlertHeading,
        ToggleButton,
        PaymentButtons
    },

    mixins: [
        FormComponent
    ],

    computed: {

        recurringMessage() {
            return this.page.options.recur_mess || this.page.site.config.giveworks.recur_mess;
        },

        chargeDate() {
            // return moment().format('do');
        },

        hasMinimumAmount() {
            return this.page.options.min_amount && (parseFloat(this.page.options.min_amount) || 0) > 0;
        },

        amounts() {
            const values = this.page.options.amounts
                ? this.page.options.amounts.split(',')
                : this.page.site.config.giveworks.ask_amounts;

            return values.filter(value => {
                return value >= (parseFloat(this.page.options.min_amount) || 0);
            });
        }

    }

};
</script>
