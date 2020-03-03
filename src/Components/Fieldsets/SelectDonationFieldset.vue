<template>
    <fieldset>
        <h3 v-if="legends" :class="{'mb-0': hasMinimumAmount}">
            Donation amount
        </h3>

        <div v-if="hasMinimumAmount" class="mb-2">
            <small class="text-muted">Minimum accepted amount is ${{ page.options.min_amount }}</small>
        </div>

        <payment-buttons v-model="form.amount"
            v-query
            name="amount"
            :amounts="amounts"
            :errors="errors"
            :page="page" />

        <div v-if="page.site.recurring && !page.options.recurring_only" class="form-group mt-3">
            <label v-html="recurringMessage" />
            <toggle-button v-model.number="form.recurring" size="lg" />
            <small v-if="!form.recurring" class="text-muted form-text">You are making a single donation of the amount entered above. Click the 'monthly' button to make your gift go further as an automatic monthly donation.</small>
            <small v-else class="text-muted form-text">This amount will be charged automatically once each month, on or about the {{ chargeDate }}. You may cancel your donation at any time by contacting us.</small>
        </div>
        <alert v-else-if="page.site.recurring && page.options.recurring_only" variant="warning" class="mt-3">
            <alert-heading class="h3 d-flex align-items-center">
                <icon icon="exclamation-triangle" class="mr-3" /> Monthly Donation
            </alert-heading>
            <p v-if="page.options.recur_message" class="font-weight-light" v-html="page.options.recur_message" />
            <p v-else>
                Please note that this will be a monthly recurring donation. The
                amount you select will be charged automatically once each month
                on or about <em>{{ chargeDate }}</em>.  You may cancel your donation
                at any time by contacting us.
            </p>
        </alert>
    </fieldset>
</template>

<script>
import '../../Config/Icons';
import Query from '../../Directives/Query';
import ToggleButton from '../Fields/ToggleButton';
import PaymentButtons from '../Fields/PaymentButtons';
import FormComponent from '../../Mixins/FormComponent';
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';

export default {

    name: 'SelectDonationFieldset',

    components: {
        Icon,
        ToggleButton,
        PaymentButtons,
        Alert: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Alert'),
        AlertHeading: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Alert/AlertHeading'),
    },

    directives: {
        Query
    },

    mixins: [
        FormComponent
    ],

    props: {
        legends: {
            type: Boolean,
            default: true
        }
    },

    computed: {

        recurringMessage() {
            return this.page.options.recur_mess || this.page.site.config.giveworks.recur_mess;
        },

        chargeDate() {
            const now = new Date();

            return [
                now.getMonth() + 1,
                now.getDate(),
                now.getFullYear()
            ].join('/');
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
