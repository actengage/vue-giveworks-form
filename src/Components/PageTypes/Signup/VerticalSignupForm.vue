<template>

    <div class="row">

        <div class="col-md-7 col-lg-8" v-html="page.body"/>
        <!-- <div v-if="!!page.options.m_body" class="d-md-none" v-html="page.options.m_body"/> -->

        <div class="col-md-5 col-lg-4">

            <component :is="page.options.service.split('\\').pop()" :submitting="submitting" :page="page" :form="form" :errors="errors" />

        </div>

    </div>

</template>

<script>
import FormComponent from '@/Mixins/FormComponent';
import GoToWebinar from './Apis/GoToWebinar';

export default {

    components: {
        GoToWebinar
    },

    mixins: [
        FormComponent
    ]

}
</script>
