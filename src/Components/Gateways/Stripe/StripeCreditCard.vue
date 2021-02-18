<template>
    <div class="form-group" :class="{'was-validated': !!error || !!errors.token}">
        <div v-if="!loaded" class="row my-5 py-1">
            <div class="col-xs-12">
                <activity-indicator size="sm" center width="100%" />
            </div>
        </div>

        <label v-else class="d-block mt-3" :class="{'has-activity': activity}">
            <div class="stripe-field">
                <div class="form-control" :class="{'is-invalid': !!error || !!errors.token}">
                    <div ref="input" class="stripe-field-input" />
                </div>
                <div v-if="error || errors.token" class="invalid-feedback" v-html="error || errors.token.join('<br>')" />
            </div>
            <div class="stripe-field-activity">
                <activity-indicator size="xs" />
            </div>
        </label>
    </div>
</template>

<script>
import Gateway from '../Gateway';
import wait from 'vue-interface/src/Helpers/Wait';
import elapsed from 'vue-interface/src/Helpers/Elapsed';
import PaymentGateway from '../../../Mixins/PaymentGateway';

export default {

    name: 'StripeCreditCard',

    mixins: [
        PaymentGateway
    ],

    data() {
        return {
            error: null,
            loaded: false,
            activity: false
        };
    },

    mounted() {
        const gateway = Gateway(this.gateway);

        this.pageType.disableSubmitButton();
        
        // this.$dispatch.request('submit:disable');

        gateway.script((event) => {
            try {
                this.$card = gateway.card({
                    hidePostalCode: this.hidePostalCode,
                    value: {
                        postalCode: this.form.zip
                    }
                });
            }
            catch (e) {
                this.pageType.$emit('error', e);
            }

            this.$card.addEventListener('change', (event) => {
                this.errors.token = event.error ? [event.error.message] : null;

                if(event.complete) {
                    gateway.createToken(this.$card, {
                        name: `${this.form.first} ${this.form.last}`.trim(),
                        address_line1: this.form.street,
                        address_line2: this.form.addr2,
                        address_city: this.form.city,
                        address_state: this.form.state,
                        address_zip: this.form.zip,
                        address_country: 'US',
                        currency: 'usd'
                    }).then((result) => {
                        if(result.error) {
                            this.error = result.error.message;
                        }
                        else {
                            this.form.token = result.token.id;
                            this.pageType.enableSubmitButton();
                        }
                    });
                }
            });

            this.loaded = true;
            this.$nextTick(() => this.$card.mount(this.$refs.input));
        });
    }

};
</script>
