<template>

    <div>

        <div v-if="!loaded" class="row my-5 py-1">
            <div class="col-xs-12">
                <activity-indicator size="sm" :center="true"></activity-indicator>
            </div>
        </div>

        <div v-else class="my-3 py-1">
            <button type="button" class="btn btn-success btn-lg btn-block" @click="showCardForm">Enter Payment Information</button>
        </div>

    </div>

</template>

<script>
import 'vue-awesome/icons/cc-jcb';
import 'vue-awesome/icons/warning';
import 'vue-awesome/icons/cc-visa';
import 'vue-awesome/icons/cc-amex';
import 'vue-awesome/icons/credit-card';
import 'vue-awesome/icons/cc-discover';
import 'vue-awesome/icons/cc-mastercard';
import 'vue-awesome/icons/cc-diners-club';
import Gateway from '/Gateways/Gateway';
import Icon from 'vue-awesome/components/Icon';
import ActivityIndicator from '/Components/ActivityIndicators/ActivityIndicator';

export default {

    name: 'authorize-net-button',

    components: {
        Icon,
        ActivityIndicator
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
            type: Object,
            required: true
        },
        gateway: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            card: false,
            error: false,
            loaded: false
        };
    },

    methods: {
        showCardForm: function() {
            console.log('show card');
        }
    },

    created() {
        //
    },

    beforeDestroy() {
        // this.$dispatch.off(this.$submitEvent);
        // this.$dispatch.off(this.$submitCompleteEvent);
    },

    mounted() {
        const gateway = Gateway(this.gateway);

        // this.$dispatch.request('submit:disable');

        gateway.script((event) => {
            this.loaded = true;
        });
    }

}
</script>
