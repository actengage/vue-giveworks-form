import Page from '../Models/Page';
import FormEvents from './FormEvents';

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

        redirect(url) {
            setTimeout(() => {
                window.location = url || (this.redirect || this.page.next_page.url);
            });
        },

        submit(e) {
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
                            resolve(response);
                        }, response => {
                            this.submitting = false;
                            this.errors = response.data.errors;
                            this.$emit('submit-complete', true, response);
                            this.$emit('submit-success', response);
                            reject(response);
                        });
                }
                else {
                    reject(new Error('The form is already submitting'));
                }
            });
        },

        onSubmit() {
            if(this.$el.querySelector(':focus')) {
                this.$el.querySelector(':focus').blur();
            }
        },

        onSubmitEnable() {
            this.enable();
        },

        onSubmitDisable() {
            this.disable();
        },

        onSubmitShow() {
            this.show();
        },

        onSubmitHide() {
            this.hide();
        },

        onRedirect(url) {
            setTimeout(() => {
                window.location = url || this.redirect || this.page.next_page.url;
            });
        }

    },

    data() {
        return {
            form: this.$attrs.form || {
                recurring: 0
            },
            errors: {},
            submitting: false,
            model: new Page({
                id: this.page.id
            })
        };
    }

};
