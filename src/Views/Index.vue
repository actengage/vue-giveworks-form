<template>
    <div>
        <div v-if="!this.$route.params.slug || this.$route.query.apiKey" class="row justify-content-center">
            <div class="col-lg-6">
                <alert variant="danger">
                    <h3>Invalid Url</h3>
                    <p>To test a page make sure you have a slug and API key defined.</p>
                    <p><code><pre class="p-2 bg-light text-danger">/ffff/tell_congress_to_end_bi</pre></code></p>
                </alert>
                <form @submit.prevent="onSubmit">
                    <input-field v-model="form.short" label="Site Short Name" placeholder="Site Short Name" help-text="Example: 'ffff'" custom />
                    <input-field v-model="form.slug" label="Page Slug" placeholder="Page Slug" help-text="Example: 'tell_congress_to_end_bi'" custom />
                    <input-field v-model="form.apikey" label="API Key" placeholder="API Key" help-text="The Giveworks API for site" custom />
                    <btn :disabled="!form.short || !form.slug || !form.apiKey">Go To Page</btn>
                </form>
            </div>
        </div>

        <giveworks-form
            v-else
            :env="this.$route.query.env"
            :page-id="this.$route.params.slug"
            :api-key="this.$route.query.key">
        </giveworks-form>
    </div>
</template>

<script>
import Btn from 'vue-interface/src/Components/Btn';
import Alert from 'vue-interface/src/Components/Alert';
import GiveworksForm from '@/Components/GiveworksForm.vue';
import InputField from 'vue-interface/src/Components/InputField';

export default {
    components: {
        Btn,
        Alert,
        InputField,
        GiveworksForm
    },
    methods: {
        onSubmit() {
            this.$router.push({
                name: 'index',
                params: {
                    apiKey: null,
                    slug: this.form.slug,
                    short: this.form.short
                }
            })
        }
    },
    data() {
        return {
            form: {}
        }
    }
};
</script>