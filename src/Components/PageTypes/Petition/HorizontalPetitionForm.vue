<template>

    <div>
        <div class="row">
            <div class="col-sm-12" v-html="page.body"/>
        </div>

        <div class="row">

            <div class="col-md-6">

                <contact-info-fieldset :page="page" :form="form" :errors="errors"/>

                <textarea-field v-if="page.options.add_comment" v-model="form.comment" id="comment" :label="commentMessage"/>

                <activity-button type="submit" size="lg" orientation="right" :block="true" :label="buttonLabel || page.site.config.giveworks.button.petition"/>

                <div v-if="page.options.add_optin">
                    <label class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" v-model="form.optin" checked>
                        <span class="custom-control-indicator"></span>
                        <small v-html="optinMessage" class="custom-control-label text-muted form-text"></small>
                    </label>
                </div>

            </div>

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
