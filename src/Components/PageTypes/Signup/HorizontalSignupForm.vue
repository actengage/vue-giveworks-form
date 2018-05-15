<template>

    <div>
        <!--
    	<div v-if="page.options.m_show_header" class="d-md-none">
    		<h1 v-html="page.site.name"/>
    	</div>
        -->

        <div class="row">
            <div class="col-sm-12" v-html="page.body"/>
            <!-- <div v-if="!!page.options.m_body" class="d-md-none" v-html="page.options.m_body"/> -->
        </div>

        <div class="row">

            <div class="col-sm-12">

                <component :is="page.options.service" :submitting="submitting" :page="page" :form="form" :errors="errors" />

            </div>

        </div>

    </div>

</template>

<script>
import chunk from 'lodash-es/chunk';
import GoToWebinar from './Apis/GoToWebinar';
import FormComponent from '@/Mixins/FormComponent';
import VerticalSignupForm from './VerticalSignupForm';

export default {

    extends: VerticalSignupForm,

    components: {
        GoToWebinar
    },

    mixins: [
        FormComponent
    ]

}
</script>
