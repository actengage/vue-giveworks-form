<script>
import Query from '../../Directives/Query';
import FormControl from 'vue-interface/src/Mixins/FormControl';
import { isFunction } from 'vue-interface/src/Helpers/Functions';

export default {

    components: {
        FormGroup: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/FormGroup'),
    },

    mixins: [
        FormControl
    ],

    directives: {
        Query
    },

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

    computed: {

        name() {
            return this.$attrs.name;
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

    },

    methods: {

        updated(value) {
            this.$emit('input', value);
        }

    }

};
</script>
