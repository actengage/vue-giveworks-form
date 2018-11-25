import '../Config/Icons';
import Btn from 'vue-interface/src/Components/Btn';
import Alert from 'vue-interface/src/Components/Alert';
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';
import ActivityIndicator from 'vue-interface/src/Components/ActivityIndicator';

export default {

    components: {
        Btn,
        Icon,
        Alert,
        ActivityIndicator
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
