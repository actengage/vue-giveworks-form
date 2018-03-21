<template>
    <div class="form-group" :class="{'was-validated': errors[name]}">
        <label class="text-bold" for="{{name}}">{{label}}</label>
        <select class="custom-select form-control":name="name" :id="name || id" :class="{'is-invalid': errors[name]}" v-model="form[name]" :required="required" :disabled="disabled">
            <option :value="option.value || option" v-for="option in selectOptions">{{ option.label || option }}</option>
        </select>
        <div v-if="errors[name]" class="invalid-feedback" v-html="errors[name].join('<br>')"></div>
    </div>
</template>

<script>
import { isArray } from 'lodash';

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
        'options': {
            type: [Object, Array],
            required: true
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
        'disabled': {
            type: Boolean,
            default: false
        }
    },

    computed: {
        selectOptions: function() {
            if(isArray(this.options)) {
                return this.options;
            }

            const options = [];

            for(let i in this.options) {
                options.push({
                    value: i,
                    label: this.options[i]
                })
            }

            return options;
        }
    }

}
</script>
