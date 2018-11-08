<script>
import FormControl from 'vue-interface/src/Mixins/FormControl';
import { isFunction } from 'vue-interface/src/Helpers/Functions';

export default {

    mixins: [
        FormControl
    ],

    props: {

        form: {
            type: Object,
            required: true
        },

        page: {
            type: Object,
            required: true
        },

        question: {
            type: Object,
            required: true
        },

        errors: {
            type: Object,
            required: true
        }

    },

    directives: {

        changed(el, binding, vnode) {
            el.addEventListener('change', event => {
                if(event.target.checked && isFunction(binding.value)) {
                    binding.value(el);
                }
            });
        }

    }

};
</script>
