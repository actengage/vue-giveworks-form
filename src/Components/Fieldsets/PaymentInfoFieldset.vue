<template>

    <fieldset>

        <legend>Payment Information</legend>

        <payment-gateways :form="form" :errors="errors" :page="page"></payment-gateways>

        <textarea-field v-if="page.options.add_comment" v-model="form.comment" id="comment" :label="commentMessage"/>

        <activity-button type="submit" size="lg" orientation="right" :activity="submitting" :block="true" :label="buttonLabel || page.site.config.giveworks.button.donate"/>

        <div v-if="page.options.add_optin">
            <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" v-model="form.optin" checked>
                <span class="custom-control-indicator"></span>
                <small v-html="optinMessage" class="custom-control-label text-muted form-text"></small>
            </label>
        </div>

        <div v-if="page.site.disclaimer" class="mt-3"><small class="text-muted" v-html="page.site.disclaimer"></small></div>

    </fieldset>

</template>

<script>

import FormComponent from '@/Mixins/FormComponent';
import PaymentGateways from './PaymentGateways';
//import ActivityButton from '@/Components/ActivityIndicators/ActivityButton';

export default {

    name: 'payment-info-fieldset',

    components: {
        //ActivityButton,
        PaymentGateways
    },

    mixins: [
        FormComponent
    ]

}

</script>
