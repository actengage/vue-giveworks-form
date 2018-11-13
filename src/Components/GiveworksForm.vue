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
                :redirect="redirect"
                @error="onError"
            />
        </form>
        <div v-else>
            <activity-indicator size="lg" center/>
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

        submit(e) {
            this.$refs.type.submit(e);
        },

        onResize() {
            this.width = this.$el.offsetWidth;
            return this.onResize;
        },

        onError(error) {
            this.error = error;
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

    data() {
        return {
            error: null,
            page: this.data || {}
        };
    }

};
</script>
