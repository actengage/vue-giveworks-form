<template>
    <div v-if="page.id">
        <form @submit="onSubmit">
            <page-type :orientation="orientation" :form="form" :errors="errors" :page="page"></page-type>
        </form>
    </div>
    <div v-else-if="error">
        <http-error-response :error="error"></http-error-response>
    </div>
    <div v-else>
        <activity-indicator :center="true" size="xl"></activity-indicator>
    </div>
</template>

<script>

import Api from '/Http/Api';
import HttpConfig from '/Config/Http';
import PageType from '/PageTypes/PageType';
import HttpErrorResponse from './HttpErrorResponse';
import ActivityIndicator from './ActivityIndicators/ActivityIndicator';

export default {

    name: 'giveworks-form',

    components: {
        PageType,
        ActivityIndicator,
        HttpErrorResponse
    },

    data() {
        return {
            page: this.data || {},
            errors: {},
            form: {
                recurring: 0,
                optin: 1
            }
        };
    },

    props: {
        'api-key': {
            type: String,
            required: true
        },
        'data': {
            type: [Boolean, Object],
            default: false
        },
        'page-id': {
            type: [Boolean, Number, String],
            default: false
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

    methods: {
        showActivity: function() {
            const el = this.$el.querySelector('[type=submit]');

            if(el) {
                el.dispatchEvent(new Event('activity:show'));
            }
        },
        hideActivity: function() {
            const el = this.$el.querySelector('[type=submit]');

            if(el) {
                el.dispatchEvent(new Event('activity:hide'));
            }
        },
        disable: function() {
            this.$el.querySelector('[type=submit]').disabled = true;
        },
        enable: function() {
            this.$el.querySelector('[type=submit]').disabled = false;
        },
        onSubmit: function(event) {
            if(!this.$submitting) {
                this.$submitting = true;
                this.showActivity();

                Api.page.submit(this.page.id, this.form).then((response) => {
                    window.location = this.redirect || this.page.next_page.url;
                }, (error) => {
                    this.$submitting = false;
                    this.hideActivity();
                    this.$set(this, 'errors', error.response.data.errors || {});
                });
            }

            event.preventDefault();
        }
    },

    created() {
        HttpConfig.defaultRequestOptions || (HttpConfig.defaultRequestOptions = {});
        HttpConfig.defaultRequestOptions.headers['Authorization'] = 'Bearer ' + this.apiKey;
    },

    mounted() {
        if(!this.page.id) {
            Api.page.find(this.pageId).then((response) => {
                this.page = response.data;
            }).catch((error) => {
                this.error = error;
            });
        }
    },

    beforeCreate() {
        this.$dispatch.reply('form:enable', () => {
            this.enable();
        });
        
        this.$dispatch.reply('form:disable', () => {
            this.disable();
        });
    },

    beforeDestroy() {
        this.$dispatch.stopReply('form:enable');
        this.$dispatch.stopReply('form:disable');
    }

}
</script>

<style lang="sass">
@import './node_modules/the-one-true-form/src/main.scss';
</style>
