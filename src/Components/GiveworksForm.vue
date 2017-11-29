<template>
    <div v-if="page" class="one-true-form">
        <page-type :orientation="orientation" :page="page"></page-type>
    </div>
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
import PageType from '/PageTypes/PageType.vue';
import ActivityIndicator from './ActivityIndicator.vue';
import HttpErrorResponse from './HttpErrorResponse.vue';

export default {

    name: 'giveworks-form',

    props: {
        'id': [Boolean, Number, String],
        'orientation': [String],
        'api-key': {
            type: String,
            required: true
        }
    },

    components: {
        'page-type': PageType,
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
@import './node_modules/the-one-true-form/src/main.scss';
</style>
