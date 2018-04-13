<script>
import isFunction from 'lodash-es/isFunction';

export default {

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
