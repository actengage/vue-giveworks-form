<template>

    <div class="row">

        <div class="col-md-5 col-lg-4">

            <contact-info-fieldset :form="form" :errors="errors" :page="page"/>

            <textarea-field v-if="page.options.add_comment" v-model="form.comment" id="comment" :label="commentMessage"/>

            <activity-button
                size="lg"
                type="submit"
                orientation="right"
                :activity="submitting"
                :block="true" :label="buttonLabel || page.site.config.giveworks.button.petition"
            />

            <div v-if="page.options.add_optin">
                <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" v-model="form.optin" checked>
                    <span class="custom-control-indicator"></span>
                    <small v-html="optinMessage" class="custom-control-label text-muted form-text"></small>
                </label>
            </div>

        </div>

        <div class="col-md-7 col-lg-8" v-html="page.body"/>

    </div>

</template>

<script>
import FormComponent from '@/Mixins/FormComponent';
import ContactInfoFieldset from '@/Components/Fieldsets/ContactInfoFieldset';
import SelectDonationFieldset from '@/Components/Fieldsets/SelectDonationFieldset';

export default {

    components: {
        ContactInfoFieldset,
        SelectDonationFieldset
    },

    mixins: [
        FormComponent
    ]

}
</script>
