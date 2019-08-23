<template>
    <div v-if="!loaded" class="row my-5 py-1">
        <div class="col-xs-12">
            <activity-indicator size="sm" :center="true" />
        </div>
    </div>

    <div v-else class="form-group">
        <alert v-if="!hasValidGateway" variant="danger" class="d-flex align-items-center">
            <icon icon="exclamation-triangle" size="2x" class="mr-3" /> 
            <h6 class="font-weight-light my-0">
                This account has NOT been configured for the new Giveworks Forms.<br>Check the Gateways settings in <b>Site Settings > Gateways</b> in Giveworks.
            </h6>
        </alert>
        <vue-credit-card-field v-else :activity="activity" :error="error || errors.token" @change="onChange" @valid="onValid" />
    </div>
</template>

<script>
import Gateway from '../Gateways/Gateway';
import PaymentGateway from '../../Mixins/PaymentGateway';
import { throttle } from 'vue-interface/src/Helpers/Functions';

const throttled = throttle(fn => {
    fn();
}, 1000);

export default {

    name: 'CreditCardField',

    components: {
        Alert: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Alert'),
        VueCreditCardField: () => import(/* webpackChunkName: "vue-credit-card-field" */'vue-credit-card-field/src/Components/CreditCardField'),
    },

    mixins: [
        PaymentGateway
    ],

    props: {

        validateGateway: {
            type: Function,
            required: true
        },

        tokenData: {
            type: Function,
            required: true
        }

    },

    data() {
        return {
            error: false,
            loaded: false,
            activity: false
        };
    },

    computed: {

        hasValidGateway() {
            return this.validateGateway(this.gateway);
        }

    },

    mounted() {
        this.pageType.disableSubmitButton();
        
        Gateway(this.gateway).script((event) => {
            this.loaded = true;
        });
    },

    methods: {

        onTokenCreated(e) {
            this.$set(this.form, 'token', event.opaqueData.dataValue);
            this.$set(this.form, 'tokenDescriptor', event.opaqueData.dataDescriptor);
        },

        onTokenError({ messages }) {
            this.error = messages.message[0].text;
        },

        onChange: function(event) {
            if(!event || !event.complete) {
                this.pageType.disableSubmitButton();
            }
        },

        onValid: function(event) {
            throttled(() => {
                this.activity = true;

                Gateway(this.gateway)
                    .createToken(this.tokenData(event))
                    .then(e => {
                        this.onTokenCreated(e);
                        this.pageType.enableSubmitButton();
                    }, e => {
                        this.onTokenError(e);
                        this.pageType.disableSubmitButton();
                    })
                    .finally(() => {
                        throttled(() => {
                            this.activity = false;
                        });
                    });
            });
        }
        
    }

};
</script>