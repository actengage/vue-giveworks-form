<script>
import Page from '../../Models/Page';

export default {

    props: {
        page: {
            type: Object,
            required: true
        },
        errors: {
            type: [Boolean, Object],
            required: true
        }
    },

    methods: {

        submit(e) {
            return new Promise((resolve, reject) => {
                if(!this.submitting) {
                    this.errors = {};
                    this.submitting = true;
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
</script>
