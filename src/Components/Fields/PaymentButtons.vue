<template>
    <div class="payment-buttons">
        <div class="payment-buttons-grid mb-2">
            <btn outline
                variant="success"
                v-for="amount in amounts"
                v-html="`$${amount}`"
                :key="amount"
                :active="value ? value.toString() === amount.toString() : false"
                @click="onClickButton(amount)"/>
        </div>

        <input-group prepend="$">
            <input-field :group="false" :value="value" @input="value => $emit('input', value)" label="Other Amount" placeholder="Other Amount" custom/>
        </input-group>
    </div>
</template>

<script>
import Btn from 'vue-interface/src/Components/Btn';
import FormControl from 'vue-interface/src/Mixins/FormControl';
import InputField from 'vue-interface/src/Components/InputField';
import InputGroup from 'vue-interface/src/Components/InputGroup';

export default {

    name: 'payment-buttons',

    mixins: [
        FormControl
    ],

    components: {
        Btn,
        InputField,
        InputGroup
    },

    props: {

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
        }

    }

};
</script>
