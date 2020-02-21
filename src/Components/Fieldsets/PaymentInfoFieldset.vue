<template>
    <fieldset>
        <legend>Payment Information</legend>

        <payment-gateways :form="form" :errors="errors" :page="page" />

        <textarea-field
            v-if="page.options.add_comment"
            v-model="form.comment"
            v-query
            v-autogrow
            id="comment"
            :label="commentMessage" />
    </fieldset>
</template>

<script>
import Query from '../../Directives/Query';
import FormComponent from '../../Mixins/FormComponent';
import PaymentGateways from '../Gateways/PaymentGateways';

export default {

    name: 'PaymentInfoFieldset',

    components: {
        PaymentGateways,
        TextareaField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/TextareaField'),
    },

    directives: {
        Query
    },

    mixins: [
        FormComponent
    ],

    props: {
        legends: {
            type: Boolean,
            default: true
        }
    }

};
</script>
