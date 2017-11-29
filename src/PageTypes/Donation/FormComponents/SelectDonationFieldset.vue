<template>

    <fieldset>

        <legend :class="{'mb-0': hasMinimumAmount}">Select your donation amount</legend>

        <div v-if="hasMinimumAmount" class="mb-2">
            <small class="text-muted">Minimum accepted amount is ${{ page.options.min_amount }}</small>
        </div>

        <div class="row mb-2">
            <div class="col-sm-6">
                <div class="custom-controls-stacked" v-for="value in amounts.slice(0, amounts.length / 2)">
                    <label class="custom-control custom-radio">
                        <input type="radio" :value="value" class="custom-control-input" v-model="amount">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">${{value}}</span>
                    </label>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="custom-controls-stacked" v-for="value in amounts.slice(amounts.length / 2)">
                    <label class="custom-control custom-radio">
                        <input type="radio" :value="value" class="custom-control-input" v-model="amount">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">${{value}}</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="row">
            <label for="amount" class="col-sm-6 col-form-label">
                <span class="text-bold">Your Amount</span>
            </label>
            <div class="col-sm-6">
                <input type="text" name="amount" class="form-control" id="amount" placeholder="$" v-model="amount">
                <div class="invalid-feedback">Some inline error message here.</div>
            </div>
        </div>

        <div class="form-group mt-3" v-if="page.site.recurring && !page.options.recurring_only">
            <label v-html="recurringMessage"></label>
            <div class="btn-group">
                <button type="button" class="btn" :class="{'btn-success': !recurring, 'btn-secondary': !!recurring}" @click="setRecurring(0);">One-Time</button>
                <button type="button" class="btn" :class="{'btn-success': !!recurring, 'btn-secondary': !recurring}" @click="setRecurring(1);">Monthly</button>
            </div>

            <small v-if="!recurring" class="text-muted form-text">You are making a single donation of the amount entered above. Click the 'monthly' button to make your gift go further as an automatic monthly donation.</small>
            <small v-if="!!recurring" class="text-muted form-text">This amount will be charged automatically once each month, on or about the {{ chargeDate }}. You may cancel your donation at any time by contacting us.</small>
        </div>
        <div class="alert alert-warning mt-3" v-else-if="page.site.recurring && page.options.recurring_only">
            <h5 class="alert-heading"><icon name="warning"></icon> Monthly Donation</h5>
            <div v-if="page.options.recur_message" v-html="page.options.recur_message"></div>
            <div v-else>
                Please note that this will be a monthly recurring donation. The amount you select will be charged automatically once each month on or about the {{ chargeDate }}.  You may cancel your donation at any time by contacting us.
            </div>
        </div>

    </fieldset>

</template>

<script>

// Icons that are used on this page
import 'vue-awesome/icons/warning';

import moment from 'moment';
import Icon from 'vue-awesome/components/Icon';
import BaseComponent from './BaseComponent.vue';

export default {

    extends: BaseComponent,

    components: {
        Icon
    },

    data: function() {
        return {
            recurring: 0,
            amount: null
        };
    },

    computed: {

        recurringMessage: function() {
            return this.page.options.recur_mess || this.page.site.config.giveworks.recur_mess;
        },

        chargeDate: function() {
            return moment().format('do');
        },

        hasMinimumAmount: function() {
            return this.page.options.min_amount && (parseFloat(this.page.options.min_amount) || 0) > 0;
        },

        amounts: function() {
            // orig default values: ['10', '25', '50', '100', '150', '250', '500', '1000'];

            const minAmount = parseFloat(this.page.options.min_amount) || 0;
            const values = this.page.site.config.giveworks.ask_amounts;

            return values.filter(value => {
                return value >= minAmount;
            });
        }

    },

    methods: {

        setRecurring: function(value) {
            this.recurring = value;
            this.$parent.$emit('set-recurring', !!value);
        }

    }

}

</script>
