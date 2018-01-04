<script>

import Api from '/Http/Api';
import ContactInfoFieldset from './FormComponents/ContactInfoFieldset';
import PaymentInfoFieldset from './FormComponents/PaymentInfoFieldset';
import SelectDonationFieldset from './FormComponents/SelectDonationFieldset';

//const dispatch = (new Broadcast).dispatch('app');

export default {

    components: {
        ContactInfoFieldset,
        PaymentInfoFieldset,
        SelectDonationFieldset
    },

    props: {
        page: {
            type: Object,
            required: true
        },
        form: {
            type: Object,
            required: true
        },
        errors: {
            type: [Boolean, Object],
            required: true
        }
    }

}
</script>
