<template>
    <alert v-html="message" data-test="1"/>
</template>

<script>
import 'vue-interface/dist/vue-interface.css';

import Alert from 'vue-interface/src/Components/Alert';

export default {

    name: 'sample-component',

    components: {
        Alert
    },

    props: {
        message: {
            type: String,
            required: true
        }
    },

    mounted() {
        console.log('1111');
    }

};
</script>

<style lang="scss">

.sample-component {
    background: rgb(200, 200, 3);

    .a {
        background: red;
    }
}
</style>
