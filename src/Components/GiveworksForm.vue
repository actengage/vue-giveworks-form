<template>
    <form v-if="page" v-on:submit.prevent="onSubmit">
        {{ page }}

        <button type="submit">Submit</button>
    </form>
    <div v-else-if="error">
        <http-error-response :error="error"></http-error-response>
    </div>
    <div v-else>
        <activity-indicator></activity-indicator>
    </div>
</template>

<script>
import axios from 'axios';
import Api from '/Http/Api';
import HttpConfig from '/Config/Http';
import ActivityIndicator from './ActivityIndicator.vue';
import HttpErrorResponse from './HttpErrorResponse.vue';

export default {

    props: {
        'id': [Boolean, Number, String],
        'api-key': {
            type: String,
            required: true
        }
    },

    components: {
        'activity-indicator': ActivityIndicator,
        'http-error-response': HttpErrorResponse
    },

    methods: {
        onSubmit(event) {
            console.log('Submit!');
        }
    },

    data() {
        return {
            page: this.$attrs.page,
            error: null
        };
    },

    created() {
        HttpConfig.defaultRequestOptions || (HttpConfig.defaultRequestOptions = {});
        HttpConfig.defaultRequestOptions.headers['Authorization'] = 'Bearer ' + this.apiKey;
    },

    mounted() {
        if(!this.page) {
            Api.page.find(this.id).then((response) => {
                this.page = response.data;
            }).catch((error) => {
                this.error = error;
            });
        }
    }

}
</script>

<style lang="sass">
    $color: green;

    form { background: $color; }
</style>
