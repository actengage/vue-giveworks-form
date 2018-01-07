<template>

    <div v-if="!loaded" class="row my-5 py-1">
        <div class="col-xs-12">
            <activity-indicator size="sm" :center="true"></activity-indicator>
        </div>
    </div>

    <div v-else class="form-group">
        <div class="text-bold mb-2">Credit Card</div>
        <credit-card-field :change="change" :complete="complete" :invalid="invalid"></credit-card-field>
    </div>

</template>

<script>
import Gateway from '/Gateways/Gateway';
import CreditCardField from '/Components/Forms/CreditCardField';
import ActivityIndicator from '/Components/ActivityIndicators/ActivityIndicator';

export default {

    name: 'authorize-net-credit-card',

    components: {
        CreditCardField,
        ActivityIndicator,
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
            error: false,
            loaded: false
        };
    },

    methods: {
        change: function(event) {
            if(!event.complete) {
                this.$dispatch.request('submit:disable');
            }
        },
        complete: function(event) {
            this.$dispatch.request('submit:enable');
        }
    },

    mounted() {
        this.$dispatch.request('submit:disable');

        Gateway(this.gateway).script((event) => {
            this.loaded = true;
        });
    }

}
</script>
