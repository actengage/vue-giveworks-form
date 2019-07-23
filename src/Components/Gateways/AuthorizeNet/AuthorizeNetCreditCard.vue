<template>

    <div v-if="!loaded" class="row my-5 py-1">
        <div class="col-xs-12">
            <activity-indicator size="sm" :center="true"/>
        </div>
    </div>

    <div v-else class="form-group">
        <alert v-if="hasGatewaySettings" variant="danger" class="d-flex align-items-center">
            <icon icon="exclamation-triangle" size="2x" class="mr-2" /> 
            <h6 class="font-weight-light my-0">
                This account has NOT been configured for the new Giveworks Forms. Check the Gateways settings in Site Settings > Gateways in Giveworks.
            </h6>
        </alert>
        <credit-card-field v-else :activity="activity" :error="error || errors.token" @change="onChange" @valid="onValid"/>
    </div>

</template>

<script>
import Gateway from '../Gateway';
import PaymentGateway from '../../../Mixins/PaymentGateway';
import { throttle } from 'vue-interface/src/Helpers/Functions';

const throttled = throttle(fn => {
    fn();
}, 1000);

export default {

    name: 'authorize-net-credit-card',

    components: {
        Alert: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Alert'),
        CreditCardField: () => import(/* webpackChunkName: "vue-credit-card-field" */'vue-credit-card-field/src/Components/CreditCardField'),
    },

    mixins: [
        PaymentGateway
    ],

    computed: {
        
        hasGatewaySettings() {
            return !this.gateway.options.login_id || !this.gateway.options.public_key;
        }

    },

    methods: {

        onChange: function(event) {
            if(!event || !event.complete) {
                this.pageType.disableSubmitButton();
            }
        },

        onValid: function(event) {
            throttled(() => {
                this.activity = true;

                Gateway(this.gateway).createToken({
                    cardNumber: event.card.number,
                    month: event.card.expMonth,
                    year: event.card.expYear,
                    cardCode: event.card.cvc
                }, event => {
                    throttled(() => {
                        this.activity = false;

                        if(event.messages.resultCode === 'Ok') {
                            this.$set(this.form, 'token', event.opaqueData.dataValue);
                            this.$set(this.form, 'tokenDescriptor', event.opaqueData.dataDescriptor);
                            this.pageType.enableSubmitButton();
                        }
                        else if(event.messages.resultCode === 'Error') {
                            this.error = event.messages.message[0].text;
                            this.pageType.disableSubmitButton();
                        }
                    });
                });
            });
        }
        
    },

    mounted() {
        this.pageType.disableSubmitButton();
        
        Gateway(this.gateway).script((event) => {
            this.loaded = true;
        });
    },

    data() {
        return {
            error: false,
            loaded: false,
            activity: false
        };
    }

};
</script>
