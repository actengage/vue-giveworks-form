<template>
    <div v-if="page.id">
        <form @submit.prevent="submit" novalidate="novalidate">
            <component
                :is="pageTypeComponent"
                :orientation="orientation"
                :submitting="submitting"
                :form="form"
                :errors="errors"
                :page="page"
            />
        </form>
    </div>
    <div v-else-if="error">
        <div class="center-wrapper">
            <div class="center-content">
                <http-error-response min-width="400px" :error="error" />
            </div>
        </div>
    </div>
    <div v-else>
        <activity-indicator :center="true" size="xl"/>
    </div>
</template>

<script>
import 'vue-interface/dist/vue-interface.css';
import each from 'lodash-es/each';
import Page from '@/Models/Page';
import HttpConfig from '@/Config/Http';
import HttpErrorResponse from './HttpErrorResponse';
import Request from 'vue-interface/src/Http/Request/Request';
import ActivityIndicator from 'vue-interface/src/Components/ActivityIndicator/ActivityIndicator';

import {
    HorizontalDonationForm,
    VerticalDonationForm,
    HorizontalPetitionForm,
    VerticalPetitionForm,
    HorizontalSignupForm,
    VerticalSignupForm,
    HorizontalSurveyForm,
    VerticalSurveyForm
} from './PageTypes';

export default {

    name: 'giveworks-form',

    components: {
        ActivityIndicator,
        HorizontalDonationForm,
        VerticalDonationForm,
        HorizontalPetitionForm,
        VerticalPetitionForm,
        HorizontalSignupForm,
        VerticalSignupForm,
        HorizontalSurveyForm,
        VerticalSurveyForm,
        HttpErrorResponse
    },

    props: {

        data: [Boolean, Object],

        pageId: [Number, String],

        redirect: [Boolean, String],

        apiKey: {
            type: String,
            required: true
        },

        orientation: {
            type: String,
            default: 'vertical',
            validator: value => {
                return ['vertical', 'horizontal'].indexOf(value) !== -1;
            }
        }
    },

    computed: {
        pageTypeComponent() {
            return this.orientation + '-' + this.page.special + '-form';
        }
    },

    methods: {

        hide: function() {
            this.$el.querySelector('[type=submit]').style.display = 'none';
        },

        show: function() {
            this.$el.querySelector('[type=submit]').style.display = 'block';
        },

        disable: function() {
            this.$el.querySelector('[type=submit]').disabled = true;
        },

        enable: function() {
            this.$el.querySelector('[type=submit]').disabled = false;
        },

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

        submit: function() {
            this.$dispatch.request('form:submit');
        }
    },

    data() {
        return {
            form: {},
            errors: {},
            error: null,
            model: false,
            submitting: false,
            page: this.data || {}
        };
    },

    created() {
        Request.option(HttpConfig);
        Request.option({
            headers: {
                Authorization: 'Bearer ' + this.apiKey
            }
        });
    },

    mounted() {
        if(!this.page.id) {
            Page.find(this.pageId).then(model => {
                this.page = model.toJson();
                this.model = new Page({
                    id: this.page.id
                });
            }, error => {
                this.error = error;
            });
        }
        else {
            this.model = new Page({
                id: this.page.id
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

        this.$dispatch.reply('form', (resolve, reject) => {
            resolve(this);
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

        this.$dispatch.reply('form:submit', (resolve, reject) => {
            if(!this.submitting) {
                this.showActivity();
                this.errors = {};
                this.submitting = true;
                this.$dispatch.emit('form:submit', this.form, this);

                return this.model.fill(this.form).create(this.form)
                    .then(response => {
                        this.submitting = false;
                        this.$dispatch.emit('form:submit:complete', true, response, this);
                        this.$dispatch.emit('form:submit:success', response, this);
                        this.$dispatch.request('form:redirect');
                        resolve(response);
                    }, response => {
                        this.hideActivity();
                        this.submitting = false;
                        this.errors = response.data.errors;
                        this.$dispatch.emit('form:submit:complete', false, this.errors, this);
                        this.$dispatch.emit('form:submit:error', this.errors, this);
                        reject(response);
                    });
            }
            else {
                reject(new Error('The form is already submitting'));
            }
        });

        this.$dispatch.on('form:submit', data => {
            if(this.$el.querySelector(':focus')) {
                this.$el.querySelector(':focus').blur();
            }
        });
    },

    beforeDestroy() {
        this.$dispatch.off('form:submit');
        this.$dispatch.stopReply('form:submit');
        this.$dispatch.stopReply('form:redirect');
        this.$dispatch.stopReply('submit:enable');
        this.$dispatch.stopReply('submit:disable');
        this.$dispatch.stopReply('submit:show');
        this.$dispatch.stopReply('submit:hide');
    }

}
</script>

<style lang="scss">
@import './node_modules/the-one-true-form/src/main.scss';
</style>
