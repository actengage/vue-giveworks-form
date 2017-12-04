<script>

import BroadcastManager from 'broadcast/src/BroadcastManager';
import ContactInfoFieldset from './FormComponents/ContactInfoFieldset';
import PaymentInfoFieldset from './FormComponents/PaymentInfoFieldset';
import SelectDonationFieldset from './FormComponents/SelectDonationFieldset';

const dispatch = (new Broadcast).dispatch('app');

export default {

    props: {
        page: {
            type: Object,
            required: true
        }
    },

    components: {
        'contact-info-fieldset': ContactInfoFieldset,
        'payment-info-fieldset': PaymentInfoFieldset,
        'select-donation-fieldset': SelectDonationFieldset
    },

    data() {
        return {
            form: {
                recurring: 1,
                optin: 1
            }
        };
    },

    methods: {
        disable: function() {
            this.$el.querySelector('[type=submit]').disabled = true;
        },
        enabled: function() {
            this.$el.querySelector('[type=submit]').disabled = false;
        }
    },

    created() {
        dispatch.on('form:enable', this.enable);
        dispatch.on('form:disable', this.disable);
    },

    destroyed() {
        dispatch.off('form:enable');
        dispatch.off('form:disabled');
    }

}
</script>
