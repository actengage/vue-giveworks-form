<template>
    <button :type="type" class="btn" :class="classes" :disabled="disabled">
        {{label}} <activity-indicator :type="indicator"></activity-indicator>
    </button>
</template>

<script>
import { extend } from 'lodash';
import ActivityIndicator from './ActivityIndicator';

const convertAnimationDelayToInt = function(delay) {
    const num = parseFloat(delay, 10);
    const matches = delay.match(/m?s/);
    const unit = matches ? matches[0] : false;

    let milliseconds;

    switch (unit) {
        case "s": // seconds
            milliseconds = num * 1000;
            break;
        case "ms":
        default:
            milliseconds = num;
            break;
    }

    return milliseconds || 0;
};

const animated = function(el, callback) {
    const defaultView = (el.ownerDocument || document).defaultView;

    setTimeout(() => {
        callback.apply();
    }, convertAnimationDelayToInt(defaultView.getComputedStyle(el).animationDuration));
};

export default {

    name: 'activity-button',

    props: {
        block: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'md'
        },
        color: {
            type: String,
            default: 'primary'
        },
        type: {
            type: String,
            default: 'button'
        },
        indicator: {
            type: String,
            default: 'spinner'
        },
        orientation: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    },

    components: {
        ActivityIndicator
    },

    data: function() {
        return {
            disabled: this.$props.disabled == 'true'
        };
    },

    beforeDestroy: function() {
        this.$el.removeEventListener('activity:show');
        this.$el.removeEventListener('activity:hide');
    },

    mounted: function() {
        this.$el.addEventListener('activity:show', (event) => {
            this.showActivity();
        });

        this.$el.addEventListener('activity:hide', (event) => {
            this.hideActivity();
        });
    },

    computed: {
        classes: function() {
            const classes = {};

            classes['btn-block'] = this.block;
            classes['btn-' + this.size.replace('btn-', '')] = !!this.size;
            classes['btn-' + this.color.replace('btn-', '')] = !!this.color;
            classes['btn-activity'] = this.activity;
            classes['btn-activity-' + this.orientation.replace('btn-activity-', '')] = !!this.orientation;
            classes['btn-activity-indicator-' + this.indicator.replace('btn-activity-indicator-', '')] = !!this.indicator;

            return classes;
        }
    },

    methods: {
        disable: function() {
            this.disabled = true;
        },
        enable: function() {
            this.disabled = false;
        },
        showActivity: function() {
            this.disable();
            this.$el.classList.add('btn-activity');

            animated(this.$el, () => {
                this.$el.dispatchEvent(new Event('activity:shown'));
            });
        },
        hideActivity: function() {
            this.$el.classList.add('btn-hide-activity');

            animated(this.$el, () => {
                this.$el.classList.remove('btn-activity', 'btn-hide-activity');
                this.enable();
            });
        }
    }

}
</script>
