<template>

    <fieldset>

        <legend>Payment Information</legend>

        <payment-gateways :form="form" :errors="errors" :page="page"/>

        <textarea-field v-if="page.options.add_comment" v-autogrow v-model="form.comment" id="comment" :label="commentMessage"/>

        <btn-activity type="submit" size="md" orientation="right" :activity="submitting" :block="true" :label="buttonLabel || page.site.config.giveworks.button.donate"/>

        <div v-if="page.options.add_optin">
            <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" v-model="form.optin" checked>
                <span class="custom-control-indicator"/>
                <small v-html="optinMessage" class="custom-control-label text-muted form-text"/>
            </label>
        </div>

        <div v-if="page.site.disclaimer" class="mt-3"><small class="text-muted" v-html="page.site.disclaimer"/></div>

    </fieldset>

</template>

<script>
import PaymentGateways from './PaymentGateways';
import FormComponent from '../../Mixins/FormComponent';
import BtnActivity from 'vue-interface/src/Components/BtnActivity';
import TextareaField from 'vue-interface/src/Components/TextareaField';

export default {

    name: 'payment-info-fieldset',

    components: {
        BtnActivity,
        TextareaField,
        PaymentGateways
    },

    mixins: [
        FormComponent
    ]

};
</script>
