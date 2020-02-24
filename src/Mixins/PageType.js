import Page from '../Models/Page';
import FormEvents from './FormEvents';
import { isFunction } from 'vue-interface/src/Helpers/Functions';

export default {

    props: {

        source: [String, Number],

        redirect: [Boolean, String],

        httpOptions: Object,

        page: {
            type: Object,
            required: true
        }

    },

    mixins: [
        FormEvents
    ],

    computed: {

        buttonLabel() {
            return this.page.options.button;
        },

        shouldShowEmployment() {
            return this.page.site.type === 'PAC' || this.page.site.type === 'Campaign';
        }

    },

    methods: {

        submitButton() {
            return this.$refs.submit ? this.$refs.submit.$el : this.$el.querySelector('[type=submit]');
        },

        hideSubmitButton() {
            this.submitButton().style.display = 'none';
        },

        showSubmitButton() {
            this.submitButton().style.display = 'block';
        },

        disableSubmitButton() {
            this.submitButton().disabled = true;
        },

        enableSubmitButton() {
            this.submitButton().disabled = false;
        },

        handleRedirect(url, sessionid) {
            setTimeout(() => {
                if(!url && this.page.next_page) {
                    url = this.page.next_page.url.replace(/\/$/, '') + (
                        this.form.source ? '/' + this.form.source : ''
                    );
                }
                
                if(url) {
                    window.location = url + (sessionid && (url.match(/\?/) ? '&' : '?') + `sessionid=${sessionid}`);
                }
            });
        },

        submit(success, failed) {
            if(this.$el.querySelector(':focus')) {
                this.$el.querySelector(':focus').blur();
            }

            return new Promise((resolve, reject) => {
                if(!this.submitting) {
                    this.errors = {};
                    this.submitting = true;
                    this.$emit('submit');
                    this.model.save(this.form, Object.assign({
                        method: 'post'
                    }, this.httpOptions))
                        .then(response => {
                            this.submitting = false;
                            this.$emit('submit-complete', true, response);
                            this.$emit('submit-success', response);

                            if(isFunction(success)) {
                                success(response);
                            }

                            resolve(response);
                        }, response => {
                            this.submitting = false;
                            this.errors = response.data.errors;
                            this.$emit('submit-complete', false, response);
                            this.$emit('submit-failed', response);

                            if(isFunction(failed)) {
                                failed(response);
                            }

                            reject(response);
                        });
                }
                else {
                    reject(new Error('The form is already submitting'));
                }
            });
        },

        onSubmitSuccess(page) {
            if(this.redirect || this.redirect !== false && this.page.external_reply) {
                this.handleRedirect(this.redirect || this.page.external_reply, page.get('sessionid'));
            }
        },

        onSubmitError(e) {
            throw e;
        }

    },

    mounted() {
        this.loaded = true;
        this.$nextTick(() => this.$emit('init'));
    },

    data() {
        const recurring = this.page.site.recurring ? (
            this.page.options.recurring_only ? 1 : 0
        ) : 0;
        
        return {
            form: {
                source: this.source,
                recurring: recurring
            },
            errors: {},
            loaded: false,
            submitting: false,
            model: new Page({
                id: this.page.id
            })
        };
    }

};
