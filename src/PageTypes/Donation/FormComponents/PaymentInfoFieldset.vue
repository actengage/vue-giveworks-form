<template>

    <fieldset>

        <legend>Payment information</legend>

        <payment-gateways :form="form" :errors="errors" :page="page"></payment-gateways>

        <div v-if="page.options.add_comment" class="form-group">
            <label for="comment" class="text-bold" v-html="commentMessage"></label>
            <textarea id="comment" class="form-control" v-model="form.comment"></textarea>
        </div>

        <button type="submit" class="btn btn-lg btn-block btn-primary" v-html="buttonLabel"></button>

        <div v-if="page.options.add_optin">
            <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" v-model="form.optin" checked>
                <span class="custom-control-indicator"></span>
                <small v-html="optinMessage" class="custom-control-description text-muted form-text"></small>
            </label>
        </div>

        <div v-if="page.site.disclaimer" class="mt-3"><small class="text-muted" v-html="page.site.disclaimer"></small></div>

    </fieldset>

</template>

<script>

import BaseComponent from './BaseComponent';
import PaymentGateways from './PaymentGateways';

export default {

    extends: BaseComponent,

    components: {
        PaymentGateways
    },

    computed: {

        commentMessage() {
            return this.page.options.comment_message || this.page.site.config.giveworks.comment_mess;
        },

        optinMessage() {
            return this.page.options.optin_message || this.page.site.config.giveworks.optin_mess;
        },

        buttonLabel() {
            return this.page.options.button || this.page.site.config.giveworks.button.donate;
        }
    }

}

</script>
