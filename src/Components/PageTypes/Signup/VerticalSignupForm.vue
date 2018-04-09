<template>

    <div class="row">

        <div class="col-md-5 col-lg-4">

            <component :is="page.options.service" :page="page" :form="form" :errors="errors" />

            <activity-button
                size="lg"
                type="submit"
                orientation="right"
                :activity="submitting"
                :block="true"
                :label="buttonLabel || page.site.config.giveworks.button.signup"
            />

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
