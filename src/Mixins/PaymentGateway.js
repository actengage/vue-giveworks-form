import '../Config/Icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';

export default {

    components: {
        Icon,
        Btn: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Btn'),
        Alert: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Alert'),
        ActivityIndicator: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/ActivityIndicator')
    },

    props: {
        page: {
            type: Object,
            required: true
        },
        pageType: {
            type: Object,
            required: true
        },
        form: {
            type: Object,
            required: true
        },
        errors: {
            type: Object,
            required: true
        },
        gateway: {
            type: Object,
            required: true
        }
    }

};
