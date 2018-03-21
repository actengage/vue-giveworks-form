<template>
    <div v-if="page.id">
        <form @submit="submit">
            <page-type :orientation="orientation" :form="form" :errors="errors" :page="page"></page-type>
        </form>
    </div>
    <div v-else-if="error">
        <div class="center-wrapper">
            <div class="center-content">
                <http-error-response min-width="400px" :error="error"></http-error-response>
            </div>
        </div>
    </div>
    <div v-else>
        <activity-indicator :center="true" size="xl"></activity-indicator>
    </div>
</template>

<script>

import Api from '/Http/Api';
import { each } from 'lodash';
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
        hide: function() {
            this.$el.querySelector('[type=submit]').style.display = 'none';
        },
        show: function() {
            this.$el.querySelector('[type=submit]').style.display = 'block';
        },
        submit: function(event) {
            this.$dispatch.request('form:submit').then(response => {
                console.log(response);
            }, error => {
                console.log(error);
            });

            event.preventDefault();
        }
    },

    data() {
        return {
            page: this.data || {},
            error: null,
            errors: {},
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
        if(!this.page.id) {
            Api.page.find(this.pageId).then((response) => {
                this.page = response.data;
            }, (error) => {
                this.error = error;
            });
        }
    },

    beforeCreate() {
        const replies = {
            'submit:show': 'show',
            'submit:hide': 'hide',
            'submit:enable': 'enable',
            'submit:disable': 'disable',
        };

        each(replies, (method, name) => {
            this.$dispatch.reply(name, (resolve, reject) =>  {
                try {
                    resolve(this[method]());
                }
                catch(error) {
                    reject(error);
                }
            });
        });

        this.$dispatch.on('form:submit', data => {
            const el = this.$el.querySelector(':focus');

            if(el) {
                el.blur();
            }
        });

        this.$dispatch.reply('form:redirect', (resolve, reject, url) => {
            try {
                const location = url || (this.redirect || this.page.next_page.url);

                setTimeout(() => {
                    window.location = location;
                });

                resolve(location);
            }
            catch(e) {
                reject(e);
            }
        });

        this.$dispatch.reply('form', (resolve, reject) => {
            resolve(this);
        });

        this.$dispatch.reply('form:submit', (resolve, reject) => {
            if(!this.$submitting) {
                this.showActivity();
                this.$submitting = true;
                this.$set(this, 'errors', {});
                this.$dispatch.emit('form:submit', this.form, this);

                return Api.page.submit(this.page.id, this.form)
                    .then((response) => {
                        this.$submitting = false;
                        this.$dispatch.emit('form:submit:complete', true, response, this);
                        this.$dispatch.emit('form:submit:success', response, this);
                        this.$dispatch.request('form:redirect');
                        resolve(response);
                    }, (error) => {
                        this.hideActivity();
                        this.$submitting = false;
                        this.$set(this, 'errors', error.response.data.errors || {});
                        this.$dispatch.emit('form:submit:complete', false, error, this);
                        this.$dispatch.emit('form:submit:error', error, this);
                        reject(error);
                    });
            }
            else {
                reject(new Error('The form is already submitting'));
            }
        });
    },

    beforeDestroy() {
        this.$dispatch.off('form:submit');
        this.$dispatch.stopReply('form:submit');
        this.$dispatch.stopReply('submit:enable');
        this.$dispatch.stopReply('submit:disable');
        this.$dispatch.stopReply('submit:show');
        this.$dispatch.stopReply('submit:hide');
    }

}
</script>

<style lang="sass">
@import './node_modules/the-one-true-form/src/main.scss';
</style>
