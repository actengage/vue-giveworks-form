<template>
    <div class="form-group" :class="{'was-validated': errors[name]}">
        <label class="text-bold" for="{{name}}">{{label}}</label>
        <input class="form-control" :type="type" :name="name" :id="name || id" :class="{'is-invalid': errors[name]}" v-model="form[name]" autocomplete="on" :required="required" :placeholder="placeholder">
        <div v-if="errors[name]" class="invalid-feedback" v-html="errors[name].join('<br>')"></div>
    </div>
</template>

<script>

import IMask from 'imask';

export default {

    props: {
        'form': {
            required: true,
            type: Object
        },
        'errors': {
            type: [Boolean, Object],
            required: true
        },
        'name': {
            required: true,
            type: String
        },
        'label': {
            required: true,
            type: String
        },
        'type': {
            type: String,
            default: 'text'
        },
        'id': {
            type: String
        },
        'placeholder': {
            type: String
        },
        'required': {
            type: Boolean,
            default: false
        },
        'mask': {
            type: String
        }
    },

    updated() {
        if(this.mask) {
            this.$el.querySelector('input').dispatchEvent(new Event('change'));
        }
    },

    mounted() {
        if(this.mask) {
            const mask = new IMask(this.$el.querySelector('input'), {
                mask: '(000) 000-0000'
            });
        }
    }

}
</script>
