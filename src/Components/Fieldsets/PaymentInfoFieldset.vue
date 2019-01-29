<template>

    <fieldset>

        <legend>Payment Information</legend>

        <payment-gateways :form="form" :errors="errors" :page="page"/>

        <textarea-field v-if="page.options.add_comment" v-autogrow v-model="form.comment" id="comment" :label="commentMessage"/>

    </fieldset>

</template>

<script>
import FormComponent from '../../Mixins/FormComponent';
import PaymentGateways from '../Gateways/PaymentGateways';
import TextareaField from 'vue-interface/src/Components/TextareaField';

export default {

    name: 'payment-info-fieldset',

    components: {
        TextareaField,
        PaymentGateways
    },

    props: {
        legends: {
            type: Boolean,
            default: true
        }
    },

    mixins: [
        FormComponent
    ]

};
</script>
