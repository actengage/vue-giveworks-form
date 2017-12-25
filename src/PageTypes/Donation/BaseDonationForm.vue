<script>

//import Broadcast from 'broadcast';
import Api from '/Http/Api';
import ContactInfoFieldset from './FormComponents/ContactInfoFieldset';
import PaymentInfoFieldset from './FormComponents/PaymentInfoFieldset';
import SelectDonationFieldset from './FormComponents/SelectDonationFieldset';

//const dispatch = (new Broadcast).dispatch('app');

export default {

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
    },

    components: {
        'contact-info-fieldset': ContactInfoFieldset,
        'payment-info-fieldset': PaymentInfoFieldset,
        'select-donation-fieldset': SelectDonationFieldset
    }

}
</script>
