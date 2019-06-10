<template>
    <div class="giveworks-form">
        <div v-if="error">
            <div class="center-wrapper">
                <div class="center-content">
                    <http-error-response :error="error" />
                </div>
            </div>
        </div>
        <form v-else-if="page.id" novalidate="novalidate" :class="classes" @submit.prevent="submit" class="container">
            <component
                ref="type"
                :is="pageTypeComponent"
                :orientation="orientation"
                :page="page"
                :source="source"
                :redirect="redirect"
                :http-options="httpOptions"
                @error="onError"
            />
        </form>
        <div v-else>
            <activity-indicator size="lg" center/>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Page from '../Models/Page';
import HttpConfig from '../Config/Http';
import HttpErrorResponse from './HttpErrorResponse';
import Request from 'vue-interface/src/Http/Request';
import bugsnag, { Bugsnag } from '@bugsnag/js';

export default {

    name: 'GiveworksForm',

    components: {
        HttpErrorResponse,
        Signup: () => import(/* webpackChunkName: "signup-type" */'./Types/Signup'),
        Survey: () => import(/* webpackChunkName: "survey-type" */'./Types/Survey'),
        Petition: () => import(/* webpackChunkName: "petition-type" */'./Types/Petition'),
        Donation: () => import(/* webpackChunkName: "donation-type" */'./Types/Donation'),
        ActivityIndicator: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/ActivityIndicator')
    },

    props: {
        
        apiKey: {
            type: String,
            required: true
        },

        data: [Boolean, Object],

        mode: String,

        orientation: {
            type: String,
            default: 'vertical',
            validator: value => {
                return ['vertical', 'horizontal'].indexOf(value) !== -1;
            }
        },

        pageId: [Number, String],

        source: [String, Number],

        redirect: [Boolean, String]

    },

    computed: {

        classes() {
            return {
                'text-sm': this.width
            };
        },

        httpOptions() {
            return Object.assign({}, HttpConfig(this.mode), {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });
        },

        pageTypeComponent() {
            return this.page.special;
        }

    },

    methods: {

        submit(e) {
            this.$refs.type.submit(e).then(
                this.$refs.type.onSubmitSuccess,
                this.$refs.type.onSubmitError
            );
        },

        onResize() {
            this.width = this.$el.offsetWidth;
            return this.onResize;
        },

        onError(error) {
            this.error = error;
        }

    },

    mounted() {
        Promise.all([
            import('@bugsnag/js'),
            import('@bugsnag/plugin-vue')
        ])
        .then(([ {'default': bugsnag}, {'default': bugsnagVue} ]) => {
            bugsnag({
                apiKey: process.env.VUE_APP_BUGSNAG_KEY,
                releaseStage: process.env.NODE_ENV,
                notifyReleaseStages: [
                    'production'
                ]
            }).use(bugsnagVue, Vue);
        });

        if(!this.page.id && this.apiKey) {            
            Page.find(this.pageId, this.httpOptions)
                .then(model => {
                    this.page = model.toJson();
                }, error => {
                    this.error = error;
                });
        }
        else if(!this.apiKey) {
            this.error = new Error('Missing required prop: "api-key"');
            this.error.status = 500;
        }

        window.addEventListener('resize', this.onResize());
    },

    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },

    data() {
        return {
            error: null,
            page: this.data || {}
        };
    }

};
</script>

<style lang="scss">
@import '@/assets/scss/_global.scss';
@import '@/assets/scss/_buttons.scss';
@import '@/assets/scss/_forms.scss';
</style>
