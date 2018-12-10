<template>

    <div>
        <contact-info-fieldset :legends="false" :form="form" :errors="errors" :page="page"/>

        <employment-info-fieldset v-if="shouldShowEmployment" :legends="false" :form="form" :errors="errors" :page="page"/>

        <textarea-field v-if="page.options.add_comment" v-autogrow v-model="form.comment" id="comment" :label="commentMessage"/>

        <btn-activity
            size="lg"
            type="submit"
            orientation="right"
            :block="true"
            :activity="submitting"
            :label="buttonLabel || page.site.config.giveworks.button.petition"
        />

        <checkbox-field v-if="page.options.add_optin" :label="optinMessage" value="1" custom/>

    </div>

</template>

<script>
import PageType from '../../Mixins/PageType';
import BtnActivity from 'vue-interface/src/Components/BtnActivity';
import ContactInfoFieldset from '../Fieldsets/ContactInfoFieldset';
import CheckboxField from 'vue-interface/src/Components/CheckboxField';
import EmploymentInfoFieldset from '../Fieldsets/EmploymentInfoFieldset';
import SelectDonationFieldset from '../Fieldsets/SelectDonationFieldset';

export default {

    name: 'page-type-petition',

    extends: PageType,

    components: {
        BtnActivity,
        CheckboxField,
        ContactInfoFieldset,
        EmploymentInfoFieldset,
        SelectDonationFieldset
    }

};
</script>
