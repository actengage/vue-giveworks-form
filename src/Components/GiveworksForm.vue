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
                <http-error-response min-width="400px" :error="error"/>
            </div>
        </div>
    </div>
    <div v-else>
        <activity-indicator :center="true" size="xl"/>
    </div>
</template>

<script>
import { Request } from 'vue-toolbox';
import { RequestOptions } from 'vue-toolbox';
import { each } from 'lodash';
import Page from '@/Models/Page';
import HttpConfig from '@/Config/Http';
import HttpErrorResponse from './HttpErrorResponse';

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
        redirect: [Boolean, String],
        pageId: [Boolean, Number, String],
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
            this.$dispatch.request('form:submit').then(response => {
                console.log(response);
            }, error => {
                console.log(error);
            });
        }
    },

    data() {
        return {
            page: this.data || {},
            error: null,
            errors: {},
            model: new Page({
                id: 2696
            }),
            submitting: false,
            form: {
                recurring: 0,
                optin: 1,
                field_684: 'Yes'
            }
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
        this.model.find(this.pageId).then(model => {
            this.page = model.toJson();
        }, error => {
            this.error = error;
        });
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

            if(!this.submitting) {
                this.showActivity();
                this.submitting = true;
                this.$set(this, 'errors', {});
                this.$dispatch.emit('form:submit', this.form, this);

                this.model.initialize(this.form);
                this.model.set('id', this.pageId);

                return this.model.create(this.form)
                    .then(response => {
                        this.submitting = false;
                        this.$dispatch.emit('form:submit:complete', true, response, this);
                        this.$dispatch.emit('form:submit:success', response, this);
                        this.$dispatch.request('form:redirect');
                        resolve(response);
                    }, error => {
                        this.hideActivity();
                        this.submitting = false;
                        this.errors = error.errors;
                        this.$dispatch.emit('form:submit:complete', false, this.errors, this);
                        this.$dispatch.emit('form:submit:error', this.errors, this);
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

<style lang="scss">
@import '../node_modules/vue-toolbox/dist/vue-toolbox.css';
@import './node_modules/the-one-true-form/src/main.scss';
</style>
