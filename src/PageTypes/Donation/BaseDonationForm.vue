<script>

import DonorInfoFieldset from './FormComponents/DonorInfoFieldset.vue';
import PaymentInfoFieldset from './FormComponents/PaymentInfoFieldset.vue';
import SelectDonationFieldset from './FormComponents/SelectDonationFieldset.vue';

export default {

    props: {
        page: {
            type: Object,
            required: true
        }
    },

    components: {
        'donor-info-fieldset': DonorInfoFieldset,
        'payment-info-fieldset': PaymentInfoFieldset,
        'select-donation-fieldset': SelectDonationFieldset
    }

}
</script>
