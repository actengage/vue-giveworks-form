<template>
    <btn-group class="toggle-button" :size="size">
        <btn
            ref="buttons"
            v-for="(label, i) in buttons"
            v-html="label"
            :key="i"
            :outline="i !== value.toString()"
            :variant="i === value.toString() ? 'success' : 'secondary'"
            type="button"
            @click="$emit('input', i)"
        />
        <slot/>
    </btn-group>
</template>

<script>
import Btn from 'vue-interface/src/Components/Btn';
import BtnGroup from 'vue-interface/src/Components/BtnGroup';
import FormControl from 'vue-interface/src/Mixins/FormControl';

export default {

    name: 'toggle-button',

    inheritAttrs: false,

    mixins: [
        FormControl
    ],

    components: {
        Btn,
        BtnGroup
    },

    props: {

        value: {
            default: 0
        },

        buttons: {
            type: Object,
            default() {
                return {
                    0: 'One-Time',
                    1: 'Monthly Gift'
                };
            }
        }

    },

    mounted() {
        this.$refs.buttons.map((vnode, i) => {
            if(vnode.$el.classList.contains('btn-success')) {
                this.$emit('input', Object.keys(this.buttons).find(key => this.buttons[key] === vnode.$el.innerHTML));
            }
        });
    }

};
</script>
