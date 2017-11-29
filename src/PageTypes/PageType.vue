<template>

    <div class="container">
        <component :is="componentName" :orientation="orientation" :page="page"></component>
    </div>

</template>

<script>

import VerticalDonationForm from './Donation/VerticalDonationForm.vue';
import HorizontalDonationForm from './Donation/HorizontalDonationForm.vue';

export default {

    props: {
        page: {
            type: Object,
            required: true
        },
        orientation: {
            type: String,
            default: 'vertical',
            validator: value => {
                return ['vertical', 'horizontal'].indexOf(value) !== -1;
            }
        }
    },

    computed: {
        componentName: function() {
            return this.orientation + '-' + this.page.special;
        }
    },

    components: {
        'vertical-donation': VerticalDonationForm,
        'horizontal-donation': HorizontalDonationForm
    }

}

</script>
