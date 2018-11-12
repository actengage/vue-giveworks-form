export default {

    props: {
        page: {
            type: Object,
            required: true
        },
        form: {
            type: Object
        },
        errors: {
            type: [Boolean, Object],
            required: true
        }
    },

    computed: {

        commentMessage() {
            return this.page.options.comment_message || this.page.site.config.giveworks.comment_mess;
        },

        optinMessage() {
            return this.page.options.optin_message || this.page.site.config.giveworks.optin_mess;
        },

        buttonLabel() {
            return this.page.options.button;
        }

    }

};
