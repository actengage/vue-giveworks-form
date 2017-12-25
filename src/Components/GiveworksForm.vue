<template>
    <div v-if="page" class="one-true-form">
        <form @submit="onSubmit">
            <page-type :orientation="orientation" :form="form" :errors="errors" :page="page"></page-type>
        </form>
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
import PageType from '/PageTypes/PageType';
import ActivityIndicator from './ActivityIndicator';
import HttpErrorResponse from './HttpErrorResponse';

export default {

    name: 'giveworks-form',

    props: {
        'api-key': {
            type: String,
            required: true
        },
        'page-id': {
            type: [Number, String],
            required: true
        },
        'orientation': {
            type: String,
            default: 'vertical'
        },
        'redirect': {
            type: [Boolean, String],
            default: false
        }
    },

    components: {
        'page-type': PageType,
        'activity-indicator': ActivityIndicator,
        'http-error-response': HttpErrorResponse
    },

    methods: {
        disable: function() {
            this.$el.querySelector('[type=submit]').disabled = true;
        },
        enable: function() {
            this.$el.querySelector('[type=submit]').disabled = false;
        },
        onSubmit: function(event) {
            this.disable();

            Api.page.submit(this.page.id, this.form).then((response) => {
                window.location = this.redirect || this.page.next_page.url;
            }, (error) => {
                this.enable();
                this.$set(this, 'errors', error.response.data.errors || {});
            });

            event.preventDefault();
        }
    },

    data() {
        return {
            errors: {},
            page: this.$attrs.page,
            form: {
                recurring: 0,
                optin: 1
            }
        };
    },

    created() {
        HttpConfig.defaultRequestOptions || (HttpConfig.defaultRequestOptions = {});
        HttpConfig.defaultRequestOptions.headers['Authorization'] = 'Bearer ' + this.apiKey;
    },

    mounted() {
        if(!this.page) {
            Api.page.find(this.pageId).then((response) => {
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
