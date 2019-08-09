<template>
    <activity-indicator v-if="loading" type="spinner" size="sm" min-height="125px" />
    <component v-else :is="component" v-bind="$attrs" />
</template>

<script>
import ActivityIndicator from 'vue-interface/src/Components/ActivityIndicator';

export default {

    inheritAttrs: false,

    components: {
        ActivityIndicator
    },
    
    props: {
        
        load: {
            type: [Object, Promise],
            required: true
        }

    },

    methods: {

        loadComponent(component) {
            this.loading = true;
            
            if((component instanceof Object) && component.module) {
                return this.loadComponent(component.module);
            }

            return new Promise((resolve, reject) => {           
                component
                    .then(({['default']: component}) => {
                        this.component = component;

                        resolve(component);

                        return component;
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            });
        },

        initialize() {
            return new Promise((resolve, reject) => {
                this.loadComponent(this.load).then(resolve, reject);
            });
        }

    },

    mounted() {
        this.initialize();
    },

    data() {
        return {
            loading: true,
            component: null,
            componentProps: null
        }
    }

}
</script>
