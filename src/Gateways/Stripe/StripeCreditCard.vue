<template>

    <div class="form-group" :class="{'was-validated': !!errors.token}">
        <label class="d-block mt-3">
            <div class="text-bold mb-2">Credit Card</div>
            <div class="form-control p-2" :class="{'is-invalid': !!errors.token}">
                <div class="stripe-field"></div>
            </div>
            <div class="invalid-feedback" v-if="errors.token" v-html="errors.token.join('<br>')"></div>
        </label>
    </div>

</template>

<script>
import Gateway from '/Gateways/Gateway';

export default {

    name: 'stripe-credit-card',

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
        },
        hidePostalCode: {
            type: Boolean,
            default: false
        }
    },

    mounted() {
        const gateway = Gateway(this.gateway);

        this.$dispatch.request('form:disable');

        gateway.script((event) => {
            const card = gateway.card({
                hidePostalCode: this.hidePostalCode,
                value: {
                    postalCode: this.form.zip
                }
            });

            card.addEventListener('change', (event) => {
                this.$set(this.errors, 'token', event.error ? [event.error.message] : null);

                if(event.complete) {
                    gateway.createToken(card, {
                        currency: 'usd'
                    }).then((result) => {
                         if (result.error) {
                            this.$set(this.errors, 'token', [event.error.message]);
                        } else {
                            this.$dispatch.request('form:enable');
                            this.$set(this.form, 'token', result.token.id);
                        }
                    });
                }
            });

            card.mount(this.$el.querySelector('.stripe-field'));
        });
    }

}
</script>
