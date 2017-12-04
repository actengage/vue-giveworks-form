<template>

    <div class="container">
        <component :is="componentName" :orientation="orientation" :page="page"></component>
    </div>

</template>

<script>

import VerticalDonationForm from './Donation/VerticalDonationForm';
import HorizontalDonationForm from './Donation/HorizontalDonationForm';

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
        componentName() {
            return this.orientation + '-' + this.page.special + '-form';
        }
    },

    components: {
        VerticalDonationForm,
        HorizontalDonationForm
    }

}

</script>
