<template>
    <btn-group class="toggle-button" :size="size">
        <btn
            v-for="(label, i) in buttons"
            ref="buttons"
            :key="i"
            :outline="i !== value.toString()"
            :variant="i === value.toString() ? 'success' : 'secondary'"
            type="button"
            @click="$emit('input', i)"
            v-html="label" />
        <slot />
    </btn-group>
</template>

<script>
import FormControl from 'vue-interface/src/Mixins/FormControl';

export default {

    name: 'ToggleButton',

    components: {
        Btn: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Btn'),
        BtnGroup: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/BtnGroup')
    },

    mixins: [
        FormControl
    ],

    inheritAttrs: false,

    props: {

        value: {
            type: [String, Number],
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
        if(this.$refs.buttons) {
            this.$refs.buttons.map((vnode, i) => {
                if(vnode.$el.classList.contains('btn-success')) {
                    this.$emit('input', Object.keys(this.buttons).find(key => this.buttons[key] === vnode.$el.innerHTML));
                }
            });
        }
    }

};
</script>
