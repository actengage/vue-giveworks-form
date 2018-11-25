<template>

    <div>

        <select-donation-fieldset :form="form" :errors="errors" :page="page"/>

        <contact-info-fieldset :form="form" :errors="errors" :page="page" address/>

        <hr>

        <template v-if="shouldShowEmployment">
            <employment-info-fieldset :form="form" :errors="errors" :page="page"/>
            <hr>
        </template>

        <payment-gateways :page-type="this" :form="form" :errors="errors" :page="page"/>

        <textarea-field v-if="page.options.add_comment" v-autogrow v-model="form.comment" id="comment" :label="commentMessage"/>

        <btn-activity type="submit" size="lg" :activity="submitting" :label="buttonLabel || page.site.config.giveworks.button.donate" block/>

        <div v-if="page.options.add_optin">
            <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" v-model="form.optin" checked>
                <span class="custom-control-indicator"/>
                <small v-html="optinMessage" class="custom-control-label text-muted form-text"/>
            </label>
        </div>

        <div v-if="page.site.disclaimer" class="mt-3">
            <small class="text-muted" v-html="page.site.disclaimer"/>
        </div>

    </div>

</template>

<script>
import PageType from '../../Mixins/PageType';
import PaymentGateways from '../Gateways/PaymentGateways';
import BtnActivity from 'vue-interface/src/Components/BtnActivity';
import ContactInfoFieldset from '../Fieldsets/ContactInfoFieldset';
import TextareaField from 'vue-interface/src/Components/TextareaField';
import EmploymentInfoFieldset from '../Fieldsets/EmploymentInfoFieldset';
import SelectDonationFieldset from '../Fieldsets/SelectDonationFieldset';

export default {

    name: 'page-type-donation',

    extends: PageType,

    components: {
        BtnActivity,
        TextareaField,
        PaymentGateways,
        ContactInfoFieldset,
        EmploymentInfoFieldset,
        SelectDonationFieldset
    }

};
</script>
