<template>
    <div>
        <select-donation-fieldset :form="form" :errors="errors" :page="page" />

        <contact-info-fieldset :form="form" :errors="errors" :page="page" address />

        <hr>

        <template v-if="shouldShowEmployment">
            <employment-info-fieldset :form="form" :errors="errors" :page="page" />
            <hr>
        </template>

        <payment-gateways v-if="$refs.submit" :page-type="this" :form="form" :errors="errors" :page="page" />

        <textarea-field
            v-if="page.options.add_comment"
            id="comment"
            v-model="form.comment"
            v-autogrow
            :label="commentMessage" />

        <btn-activity
            ref="submit"
            type="submit"
            size="lg"
            :activity="submitting"
            :label="buttonLabel || page.site.config.giveworks.button.donate"
            block />

        <div v-if="page.options.add_optin">
            <label class="custom-control custom-checkbox">
                <input v-model="form.optin" type="checkbox" class="custom-control-input" checked>
                <span class="custom-control-indicator" />
                <small class="custom-control-label text-muted form-text" v-html="optinMessage" />
            </label>
        </div>

        <div v-if="page.site.disclaimer" class="mt-3">
            <small class="text-muted" v-html="page.site.disclaimer" />
        </div>
    </div>
</template>

<script>
import PageType from '../../Mixins/PageType';
import PaymentGateways from '../Gateways/PaymentGateways';
import SelectDonationFieldset from '../Fieldsets/SelectDonationFieldset';

export default {

    name: 'PageTypeDonation',

    components: {
        PaymentGateways,
        SelectDonationFieldset,
        BtnActivity: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/BtnActivity'),
        TextareaField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/TextareaField'),
        ContactInfoFieldset: () => import(/* webpackChunkName: "contact-info-fieldset" */'../Fieldsets/ContactInfoFieldset'),
        EmploymentInfoFieldset: () => import(/* webpackChunkName: "employment-info-fieldset" */'../Fieldsets/EmploymentInfoFieldset')
    },

    extends: PageType

};
</script>
