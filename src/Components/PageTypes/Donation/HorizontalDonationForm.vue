<template>


    <div>

        <!--
    	<div v-if="page.options.m_show_header" class="d-md-none">
    		<h1 v-html="page.site.name"/>
    	</div>
        -->

        <div class="row">
            <div class="col-sm-12" v-html="page.body"/>
        </div>

        <div class="row">
            <div class="col-md-4">
                <select-donation-fieldset :form="form" :errors="errors" :page="page"/>
            </div>

            <div class="col-md-4">
                <contact-info-fieldset address :form="form" :errors="errors"  :page="page"/>
            </div>

            <div class="col-md-4">
                <payment-info-fieldset :form="form" :errors="errors"  :page="page"/>
            </div>
        </div>

    </div>

</template>

<script>
import FormComponent from '@/Mixins/FormComponent';
import ContactInfoFieldset from '@/Components/Fieldsets/ContactInfoFieldset';
import PaymentInfoFieldset from '@/Components/Fieldsets/PaymentInfoFieldset';
import SelectDonationFieldset from '@/Components/Fieldsets/SelectDonationFieldset';

export default {

    components: {
        ContactInfoFieldset,
        PaymentInfoFieldset,
        SelectDonationFieldset
    },

    mixins: [
        FormComponent
    ]

}
</script>
