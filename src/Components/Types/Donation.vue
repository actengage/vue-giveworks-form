<template>

    <div>

        <select-donation-fieldset :form="form" :errors="errors" :page="page"/>

        <contact-info-fieldset address :form="form" :errors="errors" :page="page"/>

        <payment-info-fieldset :form="form" :errors="errors" :page="page" :submitting="submitting"/>

    </div>

</template>

<script>
import PageType from './PageType';
import ContactInfoFieldset from '../Fieldsets/ContactInfoFieldset';
import PaymentInfoFieldset from '../Fieldsets/PaymentInfoFieldset';
import SelectDonationFieldset from '../Fieldsets/SelectDonationFieldset';

export default {

    name: 'page-type-donation',

    extends: PageType,

    components: {
        ContactInfoFieldset,
        PaymentInfoFieldset,
        SelectDonationFieldset
    }

};
</script>
