<template>
    <div v-if="!loaded" class="row my-5 py-1">
        <div class="col-xs-12">
            <activity-indicator size="sm" :center="true" />
        </div>
    </div>

    <div v-else class="form-group">
        <alert v-if="!gateway.options.login_id || !gateway.options.public_key" variant="danger" class="d-flex align-items-center">
            <icon icon="exclamation-triangle" size="2x" class="mr-2" /> 
            <h6 class="font-weight-light my-0">
                This account has NOT been configured for the new Giveworks Forms.<br>
                <b>Reason:</b> <template v-if="!gateway.options.login_id">
                    The <em>login_id</em> is missing.
                </template> <template v-if="!gateway.options.public_key">
                    The <em>public_key</em> is missing.
                </template>
            </h6>
        </alert>
        <credit-card-field v-else :activity="activity" :error="error || errors.token" @change="onChange" @valid="onValid" />
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

    name: 'AuthorizeNetCreditCard',

    components: {
        Alert: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Alert'),
        CreditCardField: () => import(/* webpackChunkName: "vue-credit-card-field" */'vue-credit-card-field/src/Components/CreditCardField'),
    },

    mixins: [
        PaymentGateway
    ],

    data() {
        return {
            error: false,
            loaded: false,
            activity: false
        };
    },

    mounted() {
        this.pageType.disableSubmitButton();
        // this.$dispatch.request('submit:disable');

        Gateway(this.gateway).script((event) => {
            this.loaded = true;
        });
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
        
    }

};
</script>
