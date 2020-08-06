<template>
    <div class="giveworks-form">
        <div v-if="error">
            <div class="center-wrapper">
                <div class="center-content">
                    <http-error-response :error="error" />
                </div>
            </div>
        </div>
        <form v-else-if="page.id" novalidate="novalidate" :class="classes" class="container" @submit.prevent="submit">
            <component
                :is="pageTypeComponent"
                ref="type"
                :orientation="orientation"
                :page="page"
                :source="source"
                :tracking-id="trackingId"
                :redirect="redirect"
                :http-options="httpOptions"
                @error="onError"
                @init="$emit('init')"
                @submit="(...args) => this.$emit('submit', ...args)" 
                @submit-success="(...args) => this.$emit('submit-success', ...args)" 
                @submit-failed="(...args) => this.$emit('submit-failed', ...args)" 
                @submit-complete="(...args) => this.$emit('submit-complete', ...args)" />
        </form>
        <div v-else>
            <activity-indicator size="lg" center />
        </div>
    </div>
</template>

<script>
import Page from '../Models/Page';
import HttpConfig from '../Config/Http';
import HttpErrorResponse from './HttpErrorResponse';
import Request from 'vue-interface/src/Http/Request';
import bugsnag, { Bugsnag } from '@bugsnag/js';
import { pickBy } from 'vue-interface/src/Helpers/Functions';

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

        mode: {
            type: String,
            default: process.env.NODE_ENV
        },

        orientation: {
            type: String,
            default: 'vertical',
            validator: value => {
                return ['vertical', 'horizontal'].indexOf(value) !== -1;
            }
        },

        pageId: [Number, String],

        redirect: {
            type: [Boolean, String],
            default: undefined
        },

        source: [String, Number],

        session: [String, Number],

        trackingId: [String, Number],

        onSubmitSuccess: Function

    },

    data() {
        return {
            error: null,
            wasValidated: false,
            page: this.data || {}
        };
    },

    computed: {

        classes() {
            return {
                'was-validated': this.wasValidated,
                'text-sm': this.width < 100
            };
        },

        httpOptions() {
            return Object.assign({}, HttpConfig(this.mode), {
                headers: pickBy({
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Session-Id': this.session || (new URLSearchParams(location.search)).get('sessionid')
                }, value => !!value)
            });
        },

        pageTypeComponent() {
            return this.page.special;
        }

    },

    mounted() {
        const apiKey =  process.env.VUE_APP_BUGSNAG_KEY || 'e66068bbbefd6ad235c13b0c178480da';

        Promise.all([
            import('@bugsnag/js'),
            import('@bugsnag/plugin-vue')
        ])
            .then(([ {'default': bugsnag}, {'default': bugsnagVue} ]) => {
                bugsnag({
                    apiKey,
                    releaseStage: this.mode,
                    notifyReleaseStages: [
                        'production'
                    ]
                }).use(bugsnagVue, this.$root.constructor);
            })
            .finally(() => {
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
            });
    },

    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },

    methods: {

        submit(e) {
            this.$refs.type.submit(e).then(
                this.$refs.type.onSubmitSuccess,
                this.$refs.type.onSubmitError
            ).finally(e => {
                this.wasValidated = true;
            });
        },

        onResize() {
            this.width = this.$el.offsetWidth;

            return this.onResize;
        },

        onError(error) {
            this.error = error;
        }

    }

};
</script>

<style lang="scss">
@import '../assets/scss/_global.scss';
@import '../assets/scss/_buttons.scss';
@import '../assets/scss/_forms.scss';
</style>
