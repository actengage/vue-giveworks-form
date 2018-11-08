<template>
    <alert variant="danger" :heading="`Error: ${status}`" :style="{'width': widthUnit, 'min-width': minWidthUnit, 'max-width': maxWidthUnit}">
        {{ formattedMessage }}
    </alert>
</template>

<script>
import unit from 'vue-interface/src/Helpers/Unit';
import Alert from 'vue-interface/src/Components/Alert';

export default {

    name: 'http-error-response',

    components: {
        Alert
    },

    props: {

        minWidth: String,

        maxWidth: String,

        width: String,

        error: {
            type: Error,
            required: true
        }

    },

    computed: {

        widthUnit() {
            return unit(this.width);
        },

        minWidthUnit() {
            return unit(this.minWidth);
        },

        maxWidthUnit() {
            return unit(this.maxWidth);
        },

        status() {
            return this.error.status || 400;
        },

        formattedMessage() {
            if(this.error.data && this.error.data.message) {
                return this.error.data.message;
            }

            return this.error.message;
        }

    }

};
</script>
