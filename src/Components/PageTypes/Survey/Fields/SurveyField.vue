<script>
import isFunction from 'lodash-es/isFunction';
import FormControl from 'vue-interface/src/Mixins/FormControl';

export default {

    mixins: [
        FormControl
    ],

    props: {

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

}
</script>
