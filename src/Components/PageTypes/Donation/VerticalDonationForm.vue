<template>

    <div>

        <select-donation-fieldset :form="form" :errors="errors" :page="page"/>

        <contact-info-fieldset address :form="form" :errors="errors" :page="page"/>

        <payment-info-fieldset :form="form" :errors="errors" :page="page" :submitting="submitting"/>

    </div>

</template>

<script>
import FormComponent from '../../../Mixins/FormComponent';
import ContactInfoFieldset from '../../Fieldsets/ContactInfoFieldset';
import PaymentInfoFieldset from '../../Fieldsets/PaymentInfoFieldset';
import SelectDonationFieldset from '../../Fieldsets/SelectDonationFieldset';

export default {

    components: {
        ContactInfoFieldset,
        PaymentInfoFieldset,
        SelectDonationFieldset
    },

    mixins: [
        FormComponent
    ]

};
</script>
