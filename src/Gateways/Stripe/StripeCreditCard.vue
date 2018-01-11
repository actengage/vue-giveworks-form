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

    created() {
        this.$submitEvent = this.$dispatch.on('form:submit', (data) => {
            this.$card.blur();
        });
    },

    beforeDestroy() {
        this.$dispatch.off(this.$submitEvent);
    },

    mounted() {
        const gateway = Gateway(this.gateway);

        this.$dispatch.request('submit:disable');

        gateway.script((event) => {
            this.$card = gateway.card({
                hidePostalCode: this.hidePostalCode,
                value: {
                    postalCode: this.form.zip
                }
            });

            this.$card.addEventListener('change', (event) => {
                this.errors.token = event.error ? [event.error.message] : null;

                if(event.complete) {
                    gateway.createToken(this.$card, {
                        currency: 'usd'
                    }).then((result) => {
                        if (result.error) {
                            this.errors.token = [event.error.message];
                        } else {
                            this.form.token = result.token.id;
                            this.$dispatch.request('submit:enable');
                        }
                    });
                }
            });

            this.$card.mount(this.$el.querySelector('.stripe-field'));
        });
    }

}
</script>
