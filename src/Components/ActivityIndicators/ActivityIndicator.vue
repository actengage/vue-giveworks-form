<template>
    <div v-if="center" class="center-wrapper">
        <div class="center-content">
            <component :is="component" :size="size" :prefix="prefix"></component>
        </div>
    </div>
    <div v-else>
        <component :is="component" :size="size" :prefix="prefix"></component>
    </div>
</template>

<script>
import { extend } from 'lodash-es';
import { kebabCase } from 'lodash-es';
import BaseType from './Types/BaseType';
import ActivityIndicatorDots from './Types/Dots';
import ActivityIndicatorSpinner from './Types/Spinner';

export default {

    props: extend({}, BaseType.props, {
        center: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'dots'
        }
    }),

    components: {
        ActivityIndicatorDots,
        ActivityIndicatorSpinner
    },

    computed: {
        component: function() {
            return kebabCase(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

}
</script>
