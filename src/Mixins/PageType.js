import Page from '../Models/Page';
import FormEvents from './FormEvents';
import { isFunction } from 'vue-interface/src/Helpers/Functions';

export default {

    props: {
        page: {
            type: Object,
            required: true
        },
        redirect: [Boolean, String]
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
            return this.$refs.submit || this.$el.querySelector('[type=submit]');
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

        handleRedirect(url) {
            setTimeout(() => {
                window.location = url || this.redirect || this.page.next_page.url;
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
                    this.model.save(this.form, { method: 'post' })
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
                            this.$emit('submit-complete', true, response);
                            this.$emit('submit-success', response);

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

        onSubmitSuccess() {
            this.handleRedirect();
        },

        onSubmitError(e) {
            throw e;
        }

    },

    data() {
        return {
            form: {
                recurring: this.page.site.recurring ? (this.page.options.recurring_only ? 1 : 0) : 0
            },
            errors: {},
            submitting: false,
            model: new Page({
                id: this.page.id
            })
        };
    }

};
