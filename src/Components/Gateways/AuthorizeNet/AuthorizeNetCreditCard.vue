<template>

    <div v-if="!loaded" class="row my-5 py-1">
        <div class="col-xs-12">
            <activity-indicator size="sm" :center="true"/>
        </div>
    </div>

    <div v-else class="form-group">
        <div class="text-bold mb-2">Credit Card</div>
        <credit-card-field :activity="activity" :error="error || errors.token" @change="onChange" @complete="onComplete"/>
    </div>

</template>

<script>
import Gateway from '@/Components/Gateways/Gateway';
import wait from 'vue-interface/src/Helpers/Wait';
import elapsed from 'vue-interface/src/Helpers/Elapsed';
import CreditCardField from 'vue-credit-card-field/src/CreditCardField';
import ActivityIndicator from 'vue-interface/src/Components/ActivityIndicator';

export default {

    name: 'authorize-net-credit-card',

    components: {
        CreditCardField,
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

    methods: {
        onChange: function(event) {
            if (!event.complete) {
                this.$dispatch.request('submit:disable');
            }
        },
        onComplete: function(event) {
            elapsed(500, (resolve, reject) => {
                Gateway(this.gateway).createToken({
                    cardNumber: event.card.number,
                    month: event.card.expMonth,
                    year: event.card.expYear,
                    cardCode: event.card.cvc
                }, event => {
                    wait(this.activity ? 750 : 0, (resolve, reject) => {
                        if (event.messages.resultCode === 'Ok') {
                            this.$set(this.form, 'token', event.opaqueData.dataValue);
                            this.$set(this.form, 'tokenDescriptor', event.opaqueData.dataDescriptor);
                            this.$dispatch.request('submit:enable');
                            resolve(event);
                        }
                        else if (event.messages.resultCode === 'Error') {
                            this.error = event.messages.message[0].text;
                            this.$dispatch.request('submit:disable');
                            reject(this.error);
                        }
                    }).then(resolve, reject);
                });
            }, () => {
                this.activity = true;
            }).then(() => {
                this.activity = false;
            }, () => {
                this.activity = false;
            });
        }
    },

    mounted() {
        this.$dispatch.request('submit:disable');

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
