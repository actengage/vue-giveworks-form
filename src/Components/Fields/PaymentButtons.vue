<template>
    <div class="payment-buttons" :class="{'was-validated': !!errors.amount}">
        <div class="payment-buttons-grid mb-2">
            <btn v-for="amount in amounts"
                :key="amount"
                type="button"
                outline
                variant="success"
                :active="value ? value.toString() === amount.toString() : false"
                @click="onClickButton(amount)"
                v-html="`$${amount}`" />
        </div>
    
        <input-group prepend="$" :class="{'is-invalid': !!errors.amount, 'mb-3': !page.site.recurring}">
            <input-field
                ref="custom"
                custom
                label="Other Amount"
                placeholder="Other Amount"
                :group="false"
                @input="onInput" />
        </input-group>

        <form-feedback v-if="errors.amount" class="d-block" invalid v-html="errors.amount.join('<br>')" />
    </div>
</template>

<script>
import FormControl from 'vue-interface/src/Mixins/FormControl';

export default {

    name: 'PaymentButtons',

    components: {
        Btn: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Btn'),
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField'),
        InputGroup: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputGroup'),
        FormFeedback: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/FormFeedback')
    },

    mixins: [
        FormControl
    ],

    props: {

        page: {
            type: Object,
            required: true
        },

        amounts: {
            type: Array,
            required: true
        }

    },

    methods: {

        onInput(value) {
            this.$emit('input', parseInt(value));
        },

        onClickButton(value) {
            this.$emit('input',
                parseFloat(this.value) !== (value = parseFloat(value)) ? value : null
            );
        },

        onKeyDown(e) {
            if((e.keyCode < 48 || e.keyCode > 57 && e.keyCode !== 190) && !e.metaKey && e.key.length === 1) {
                e.preventDefault();
            }
        }

    }

};
</script>
