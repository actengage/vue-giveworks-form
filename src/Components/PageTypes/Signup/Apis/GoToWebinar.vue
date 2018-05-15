<template>

    <fieldset>

        <legend>Your information</legend>

        <p><em>* Indicates required fields</em></p>

        <template v-if="orientation === 'horizontal'">
            <div class="row">
                <div class="col-sm-4">
                    <input-field v-model="form.first" id="first" label="First Name*" :errors="errors"/>
                    <input-field v-model="form.last" id="last" label="Last Name*" :errors="errors"/>
                    <input-field v-model="form.email" id="email" label="Email*" :errors="errors"/>
                    <input-field v-if="page.options.show_source" v-model="form.source" id="source" label="Source" :errors="errors"/>
                </div>
                <div class="col-sm-4">
                    <input-field v-if="page.options.show_address" v-model="form.address" id="address" label="Address" :errors="errors"/>
                    <input-field v-if="page.options.show_state" v-model="form.state" id="state" label="State" :errors="errors"/>
                    <input-field v-if="page.options.show_zip" v-model="form.zip_code" id="zip_code" label="Zip Code" :errors="errors"/>
                    <input-field v-if="page.options.show_country" v-model="form.country" id="country" label="Country" :errors="errors"/>
                    <input-field v-if="page.options.show_phone" v-model="form.phone" id="phone" label="Phone" :errors="errors"/>
                    <input-field v-if="page.options.show_organization" v-model="form.organization" id="organization" label="Organization" :errors="errors"/>
                    <input-field v-if="page.options.show_job_title" v-model="form.job_title" id="job_title" label="Job Title" :errors="errors"/>
                </div>
                <div class="col-sm-4">
                    <textarea-field v-if="page.options.show_questions" v-autogrow v-model="form.questions_comments" id="questions_comments" label="Questions and Comments" :errors="errors"/>
                    <input-field v-if="page.options.show_industry" v-model="form.industry" id="industry" label="Industry" :errors="errors"/>
                    <input-field v-if="page.options.show_employees" v-model="form.number_employees" id="number_employees" label="Number of Employees" :errors="errors"/>
                    <input-field v-if="page.options.show_timeframe" v-model="form.purchasing_timeframe" id="purchasing_timeframe" label="Purchasing Timeframe" :errors="errors"/>
                    <input-field v-if="page.options.show_role" v-model="form.purchasing_role" id="purchasing_role" label="Purchasing Role" :errors="errors"/>

                    <activity-button
                        size="lg"
                        type="submit"
                        orientation="right"
                        :activity="submitting"
                        :block="true"
                        :label="buttonLabel || page.site.config.giveworks.button.signup"/>
                </div>
            </div>
        </template>

        <template v-else>
            <input-field v-model="form.first" id="first" label="First Name*" :errors="errors"/>
            <input-field v-model="form.last" id="last" label="Last Name*" :errors="errors"/>
            <input-field v-model="form.email" id="email" label="Email*" :errors="errors"/>
            <input-field v-if="page.options.show_source" v-model="form.source" id="source" label="Source" :errors="errors"/>

            <input-field v-if="page.options.show_address" v-model="form.address" id="address" label="Address" :errors="errors"/>
            <input-field v-if="page.options.show_state" v-model="form.state" id="state" label="State" :errors="errors"/>
            <input-field v-if="page.options.show_zip" v-model="form.zip_code" id="zip_code" label="Zip Code" :errors="errors"/>
            <input-field v-if="page.options.show_country" v-model="form.country" id="country" label="Country" :errors="errors"/>
            <input-field v-if="page.options.show_phone" v-model="form.phone" id="phone" label="Phone" :errors="errors"/>
            <input-field v-if="page.options.show_organization" v-model="form.organization" id="organization" label="Organization" :errors="errors"/>
            <input-field v-if="page.options.show_job_title" v-model="form.job_title" id="job_title" label="Job Title" :errors="errors"/>

            <textarea-field v-if="page.options.show_questions" v-autogrow v-model="form.questions_comments" id="questions_comments" label="Questions and Comments" :errors="errors"/>
            <input-field v-if="page.options.show_industry" v-model="form.industry" id="industry" label="Industry" :errors="errors"/>
            <input-field v-if="page.options.show_employees" v-model="form.number_employees" id="number_employees" label="Number of Employees" :errors="errors"/>
            <input-field v-if="page.options.show_timeframe" v-model="form.purchasing_timeframe" id="purchasing_timeframe" label="Purchasing Timeframe" :errors="errors"/>
            <input-field v-if="page.options.show_role" v-model="form.purchasing_role" id="purchasing_role" label="Purchasing Role" :errors="errors"/>

            <activity-button
                size="lg"
                type="submit"
                orientation="right"
                :activity="submitting"
                :block="true"
                :label="buttonLabel || page.site.config.giveworks.button.signup"/>
        </template>

    </fieldset>

</template>

<script>
import FormComponent from '@/Mixins/FormComponent';

export default {

    name: 'go-to-webinar',

    mixins: [
        FormComponent
    ],

    props: {
        submitting: Boolean
    },

    computed: {

        orientation() {
            return this.$parent.$parent.orientation;
        }

    }

}
</script>
