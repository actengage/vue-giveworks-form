<template>

    <div class="form-group" :class="{'was-validated': !!error}">
        <label class="text-bold d-block mt-3">Credit Card
            <div class="form-control p-2" :class="{'is-invalid': !!error}">
                <div class="stripe-field"></div>
            </div>
            <div class="invalid-feedback" v-if="error" v-html="error.message"></div>
        </label>
    </div>

</template>

<script>
import Gateway from '/Gateways/Gateway';
import BroadcastManager from 'broadcast/src/BroadcastManager';

const dispatch = (new BroadcastManager).dispatch('app');

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
        gateway: {
            type: Object,
            required: true
        },
        hidePostalCode: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            error: null
        };
    },

    mounted() {
        const gateway = Gateway(this.gateway);

        gateway.script((event) => {
            const card = gateway.card({
                hidePostalCode: this.hidePostalCode,
                value: {
                    postalCode: this.form.zip
                }
            });

            card.addEventListener('change', (event) => {
                if(!(this.error = event.error)) {
                    console.log(event);
                }
            });

            console.log(this);

            card.mount(this.$el.querySelector('.stripe-field'));
        });
    }

}
</script>
