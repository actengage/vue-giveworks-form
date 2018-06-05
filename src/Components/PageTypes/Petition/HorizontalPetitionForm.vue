<template>


    <div>

        <contact-info-fieldset :legends="false" :page="page" :form="form" :errors="errors"/>

        <textarea-field v-if="page.options.add_comment" v-autogrow v-model="form.comment" id="comment" :label="commentMessage"/>

        <btn-activity
            size="lg"
            type="submit"
            orientation="right"
            :activity="submitting"
            :block="true"
            :label="buttonLabel || page.site.config.giveworks.button.petition"
        />

        <div v-if="page.options.add_optin">
            <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" v-model="form.optin" checked>
                <span class="custom-control-indicator"></span>
                <small v-html="optinMessage" class="custom-control-label text-muted form-text"></small>
            </label>
        </div>

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
