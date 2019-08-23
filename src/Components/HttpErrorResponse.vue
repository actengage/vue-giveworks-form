<template>
    <div class="text-left">
        <alert variant="danger" :heading="`Error: ${status}`" :style="{'width': widthUnit, 'min-width': minWidthUnit, 'max-width': maxWidthUnit}">
            {{ formattedMessage }}
        </alert>
    </div>
</template>

<script>
import unit from 'vue-interface/src/Helpers/Functions/unit';

export default {

    name: 'HttpErrorResponse',

    components: {
        Alert: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/Alert'),
    },

    props: {

        minWidth: String,

        maxWidth: String,

        width: String,

        error: {
            type: [Object, Error],
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
            if(this.error.data && this.error.data.errors) {
                return Object.keys(this.error.data.errors)
                    .reduce((carry, key) => {
                        return carry.concat([this.error.data.errors[key]]);
                    }, [])
                    .join('<br>');
            }
            else if(this.error.data && this.error.data.message) {
                return this.error.data.message;
            }

            return this.error.message;
        }

    }

};
</script>
