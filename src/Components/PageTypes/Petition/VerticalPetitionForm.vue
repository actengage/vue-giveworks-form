<template>


    <div>

        <!--
    	<div v-if="page.options.m_show_header" class="d-md-none">
    		<h1 v-html="page.site.name"/>
    	</div>
        -->

        <div class="row">

            <div class="col-md-7 col-lg-8 order-sm-1 order-md-2">
                <div v-html="page.body"/>
                <!-- <div v-if="!!page.options.m_body" class="d-md-none" v-html="page.options.m_body"/> -->
            </div>

            <div class="col-md-5 col-lg-4 order-sm-2 order-md-1">
                
                <contact-info-fieldset :legends="false" :form="form" :errors="errors" :page="page"/>

                <textarea-field v-if="page.options.add_comment" v-autogrow v-model="form.comment" id="comment" :label="commentMessage"/>

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
