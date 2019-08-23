<template>
    <div>
        <component :is="page.options.service.split('\\').pop()" :submitting="submitting" :page="page" :form="form" :errors="errors" />
    </div>
</template>

<script>
import PageType from '../../Mixins/PageType';
export default {

    name: 'PageTypeSignup',

    extends: PageType,

    components: {
        GoToWebinar: import(/* webpackChunkName: "go-to-webinar" */'../Signups/GoToWebinar')
    }

};
</script>
