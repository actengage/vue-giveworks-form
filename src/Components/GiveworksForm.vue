<template>
    <div class="giveworks-form">
        <div v-if="error">
            <div class="center-wrapper">
                <div class="center-content">
                    <http-error-response :error="error" />
                </div>
            </div>
        </div>
        <form v-else-if="page.id" @submit.prevent="submit" novalidate="novalidate" :class="classes">
            <component
                ref="type"
                :is="pageTypeComponent"
                :orientation="orientation"
                :page="page"
            />
        </form>
        <div v-else>
            <activity-indicator :center="true" size="lg"/>
        </div>
    </div>
</template>

<script>
import Page from '../Models/Page';
import HttpConfig from '../Config/Http';
import Donation from './Types/Donation';
import Petition from './Types/Petition';
import Signup from './Types/Signup';
import Survey from './Types/Survey';
import HttpErrorResponse from './HttpErrorResponse';
import Request from 'vue-interface/src/Http/Request';
import ActivityIndicator from 'vue-interface/src/Components/ActivityIndicator';

export default {

    name: 'giveworks-form',

    components: {
        ActivityIndicator,
        HttpErrorResponse,
        Donation,
        Petition,
        Signup,
        Survey
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

        classes() {
            return {
                'text-sm': this.width
            };
        },

        pageTypeComponent() {
            return this.page.special;
        }

    },

    methods: {

        hide() {
            this.$el.querySelector('[type=submit]').style.display = 'none';
        },

        show() {
            this.$el.querySelector('[type=submit]').style.display = 'block';
        },

        disable() {
            this.$el.querySelector('[type=submit]').disabled = true;
        },

        enable() {
            this.$el.querySelector('[type=submit]').disabled = false;
        },

        showActivity() {
            const el = this.$el.querySelector('[type=submit]');

            if(el) {
                el.dispatchEvent(new Event('activity:show'));
            }
        },

        hideActivity() {
            const el = this.$el.querySelector('[type=submit]');

            if(el) {
                el.dispatchEvent(new Event('activity:hide'));
            }
        },

        submit(e) {
            this.$refs.type.submit(e);
        },

        onResize() {
            this.width = this.$el.offsetWidth;
            return this.onResize;
        }
    },

    created() {
        Request.defaults = HttpConfig;
        Request.defaults.headers = {
            'Authorization': `Bearer ${this.apiKey}`
        };
    },

    mounted() {
        if(!this.page.id) {
            Page.find(this.pageId).then(model => {
                this.page = model.toJson();
            }, error => {
                this.error = error;
            });
        }

        window.addEventListener('resize', this.onResize());
    },

    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },

    beforeCreate() {
        /*
        const replies = {
            'submit:show': 'show',
            'submit:hide': 'hide',
            'submit:enable': 'enable',
            'submit:disable': 'disable'
        };

        each(replies, (method, name) => {
            this.$dispatch.reply(name, (resolve, reject) => {
                try {
                    resolve(this[method]());
                }
                catch (error) {
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
            catch (e) {
                reject(e);
            }
        });

        this.$dispatch.reply('form:submit', (resolve, reject) => {
            if(!this.submitting) {
                this.showActivity();
                this.errors = {};
                this.submitting = true;
                this.$dispatch.emit('form:submit', this.form, this);

                return this.model.save(this.form, { method: 'post' })
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

        this.$dispatch.on('error', error => {
            this.error = error;
        });

        this.$dispatch.on('form:submit', data => {
            if(this.$el.querySelector(':focus')) {
                this.$el.querySelector(':focus').blur();
            }
        });
        */
    },

    beforeDestroy() {
        /*
        this.$dispatch.off('error');
        this.$dispatch.off('form:submit');
        this.$dispatch.stopReply('form:submit');
        this.$dispatch.stopReply('form:redirect');
        this.$dispatch.stopReply('submit:enable');
        this.$dispatch.stopReply('submit:disable');
        this.$dispatch.stopReply('submit:show');
        this.$dispatch.stopReply('submit:hide');
        */
    },

    data() {
        return {
            error: null,
            page: this.data || {}
        };
    }

};
</script>
