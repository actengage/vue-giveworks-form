<template>
    <div class="payment-buttons" :class="{'was-validated': !!errors.amount}">

        <div class="payment-buttons-grid mb-2">
            <btn type="button"
                outline
                variant="success"
                v-for="amount in amounts"
                v-html="`$${amount}`"
                :key="amount"
                :active="value ? value.toString() === amount.toString() : false"
                @click="onClickButton(amount)"/>
        </div>

        <input-group prepend="$" :class="{'is-invalid': !!errors.amount, 'mb-3': !page.site.recurring}">
            <input-field
                custom
                label="Other Amount"
                placeholder="Other Amount"
                :group="false"
                :value="value"
                @keydown="onKeyDown"
                @input="value => $emit('input', value)"/>
        </input-group>

        <form-feedback v-if="errors.amount" v-html="errors.amount.join('<br>')" class="d-block" invalid/>
    </div>
</template>

<script>
import FormControl from 'vue-interface/src/Mixins/FormControl';

export default {

    name: 'payment-buttons',

    mixins: [
        FormControl
    ],

    components: {
        Btn: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Btn'),
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField'),
        InputGroup: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputGroup'),
        FormFeedback: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/FormFeedback')
    },

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
