<template>

    <div>
        <component :is="page.options.service.split('\\').pop()" :submitting="submitting" :page="page" :form="form" :errors="errors" />
    </div>

</template>

<script>
import PageType from './PageType';
import GoToWebinar from '../Signups/GoToWebinar';

export default {

    name: 'page-type-signup',

    extends: PageType,

    components: {
        GoToWebinar
    }

};
</script>
