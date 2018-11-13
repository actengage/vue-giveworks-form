<template>

    <div v-bind-events>

        <select-donation-fieldset :form="form" :errors="errors" :page="page"/>

        <contact-info-fieldset address :form="form" :errors="errors" :page="page"/>

        <payment-info-fieldset v-bind-events :form="form" :errors="errors" :page="page"/>

    </div>

</template>

<script>
import PageType from '../../Mixins/PageType';
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
