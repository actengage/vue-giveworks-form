<template>

    <div class="row">

        <div class="col-md-5 col-lg-4">

            <component :is="page.options.service" :submitting="submitting" :page="page" :form="form" :errors="errors" />

        </div>

        <div class="col-md-7 col-lg-8" v-html="page.body"/>

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
