<template>
    <div class="giveworks-form">
        <div v-if="!this.$route.params.slug || !this.$route.query.apiKey" class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <alert variant="danger">
                        <h3>Invalid Url</h3>
                        <p>To test a page make sure you have a slug and API key defined.</p>
                        <p><code><pre class="p-2 bg-light text-danger">/ffff/tell_congress_to_end_bi</pre></code></p>
                    </alert>
                    <form @submit.prevent="onSubmit">
                        <p>* Indicates required fields.</p>
                        <input-field v-model="form.short" label="Site Short Name*" placeholder="Site Short Name*" help-text="Example: 'ffff'" custom />
                        <input-field v-model="form.slug" label="Page Slug*" placeholder="Page Slug*" help-text="Example: 'tell_congress_to_end_bi'" custom />
                        <input-field v-model="form.apiKey" label="API Key*" placeholder="API Key*   " help-text="The Giveworks API for site." custom />
                        <input-field v-model="form.source" label="Source Code" placeholder="Source Code" help-text="Source codes are optional." custom />
                        <div class="card mb-3">
                            <div class="card-body">
                                <strong>Server</strong>
                                <radio-field v-model="form.mode" label="Production" value="production" />
                                <radio-field v-model="form.mode" label="Staging" value="staging" />
                                <radio-field v-model="form.mode" label="Development" value="development" />
                            </div>
                        </div>
                        <btn :disabled="!form.short || !form.slug || !form.apiKey" size="lg" block>Go To Page</btn>
                    </form>
                </div>
            </div>
        </div>

        <div v-else class="container">
            <giveworks-form
                :env="this.$route.query.env"
                :page-id="this.$route.params.slug"
                :source="this.$route.params.source"
                :api-key="this.$route.query.apiKey"
                :mode="this.$route.query.mode">
            </giveworks-form>
        </div>
    </div>
</template>

<script>
import Btn from 'vue-interface/src/Components/Btn';
import Alert from 'vue-interface/src/Components/Alert';
import GiveworksForm from '@/Components/GiveworksForm.vue';
import InputField from 'vue-interface/src/Components/InputField';
import RadioField from 'vue-interface/src/Components/RadioField';

export default {
    
    components: {
        Btn,
        Alert,
        InputField,
        RadioField,
        GiveworksForm,
    },

    watch: {

        form: {
            deep: true,
            handler(value) {
                this.$store.commit('form', value);
            }
        }

    },

    methods: {

        onSubmit() {
            this.$router.push({
                name: 'index',
                query: {
                    mode: this.form.mode,
                    apiKey: this.form.apiKey
                },
                params: {
                    apiKey: null,
                    slug: this.form.slug,
                    short: this.form.short,
                    source: this.form.source
                }
            });

            window.location.reload();
        }

    },

    data() {
        return {
            form: Object.assign({
                mode: 'production',
                source: this.$route.query.source || null,
                slug: null,
                short: null,
                apiKey: null
            }, this.$store.state.form)
        }
    }
};
</script>