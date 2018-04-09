<template>
    <div class="autocomplete-list-wrapper">
        <ul class="autocomplete-list">
            <li class="autocomplete-list-item" v-for="item in items" @mouseenter="focus($event)" @mouseleave="blur($event)">
                <a href="#" @click.prevent="select($event, item)">
                    <span class="autocomplete-list-item-icon"></span>
                    <span class="autocomplete-list-item-label" v-html="item[display]"></span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

    name: 'google-autocomplete-field',

    props: {
        'items': {
            type: Array,
            default: () => {
                return [];
            }
        },
        'display': {
            type: String,
            default: 'description'
        }
    },

    methods: {
        hasFocus() {
            return !!this.$el.querySelector('.is-focused');
        },
        focus(event) {
            if(this.hasFocus()) {
                this.$el.querySelector('.is-focused').classList.remove('is-focused');
            }

            event.currentTarget.classList.add('is-focused');
            this.$parent.$emit('prediction:focus', event);
        },
        blur(event) {
            event.currentTarget.classList.remove('is-focused');
            this.$parent.$emit('prediction:blur', event);
        },
        select(event, item) {
            this.$parent.$emit('prediction:select', item);
        }
    }

}
</script>

<style lang="sass">
.autocomplete-list-wrapper {
    position: absolute;
    z-index: 10;
    width: 100%;
    background: white;
}

.autocomplete-list {
    margin: 0;
    padding: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, .25);
}

.autocomplete-list-item {
    margin: 0;
    padding: 0;
    font-size: .8rem;
    list-style: none;

    &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, .15);
    }

    & > a {
        text-decoration: none;
        padding: 5px;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }


    &.is-focused > a {
        text-decoration: none;
        background: rgba(0, 0, 0, .05);
    }
}

.autocomplete-list-item-icon {
    width: 15px;
    height: 20px;
    display: inline-block;
    vertical-align: top;
    background-size: 34px;
    background-position: -1px -161px;
    background-image: url(https://maps.gstatic.com/mapfiles/api-3/images/autocomplete-icons_hdpi.png);
}
</style>
