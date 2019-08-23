<template>
    <fieldset>
        <legend>Your information</legend>

        <p><em>* Indicates required fields</em></p>

        <input-field id="first"
        v-model="form.first"
        label="First Name*"
        placeholder="First Name*"
        :errors="errors"
        custom />
        <input-field id="last"
        v-model="form.last"
        label="Last Name*"
        placeholder="Last Name*"
        :errors="errors"
        custom />
        <input-field id="email"
        v-model="form.email"
        label="Email*"
        placeholder="Email*"
        :errors="errors"
        custom />
        <input-field v-if="page.options.show_source"
        id="source"
        v-model="form.source"
        label="Source"
        placeholder="Source"
        :errors="errors"
        custom />

        <place-autocomplete-field
        v-if="address || page.options.show_address"
        v-model="form.address"
        v-place-autofill:street.query="form.address"
        v-place-autofill:city="form.city"
        v-place-autofill:state.short="form.state"
        v-place-autofill:zip="form.zip_code"
        name="address"
        label="Address"
        placeholder="Address"
        :api-key="mapApiKey"
        :errors="errors"
        custom />

        <input-field v-if="page.options.show_city"
        id="city"
        v-model="form.city"
        label="City"
        placeholder="City"
        :errors="errors"
        custom />
        <input-field v-if="page.options.show_state"
        id="state"
        v-model="form.state"
        label="State"
        placeholder="State"
        :errors="errors"
        custom />
        <input-field v-if="page.options.show_zip"
        id="zip_code"
        v-model="form.zip_code"
        label="Zip Code"
        placeholder="Zip Code"
        :errors="errors"
        custom />
        <input-field v-if="page.options.show_country"
        id="country"
        v-model="form.country"
        label="Country"
        placeholder="Country"
        :errors="errors"
        custom />
        <input-field v-if="page.options.show_phone"
        id="phone"
        v-model="form.phone"
        label="Phone"
        placeholder="Phone"
        :errors="errors"
        custom />
        <input-field v-if="page.options.show_organization"
        id="organization"
        v-model="form.organization"
        label="Organization"
        placeholder="Organization"
        :errors="errors"
        custom />
        <input-field v-if="page.options.show_job_title"
        id="job_title"
        v-model="form.job_title"
        label="Job Title"
        placeholder="Job Title"
        :errors="errors"
        custom />

        <textarea-field v-if="page.options.show_questions"
        id="questions_comments"
        v-model="form.questions_comments"
        v-autogrow
        label="Questions and Comments"
        placeholder="Questions and Comments"
        :errors="errors"
        custom />
        <input-field v-if="page.options.show_industry"
        id="industry"
        v-model="form.industry"
        label="Industry"
        placeholder="Industry"
        :errors="errors"
        custom />
        <input-field v-if="page.options.show_employees"
        id="number_employees"
        v-model="form.number_employees"
        label="Number of Employees"
        placeholder="Number of Employees"
        :errors="errors"
        custom />
        <input-field v-if="page.options.show_timeframe"
        id="purchasing_timeframe"
        v-model="form.purchasing_timeframe"
        label="Purchasing Timeframe"
        placeholder="Purchasing Timeframe"
        :errors="errors"
        custom />
        <input-field v-if="page.options.show_role"
        id="purchasing_role"
        v-model="form.purchasing_role"
        label="Purchasing Role"
        placeholder="Purchasing Role"
        :errors="errors"
        custom />

        <btn-activity
        size="lg"
        type="submit"
        orientation="right"
        :activity="submitting"
        :block="true"
        :label="buttonLabel || page.site.config.giveworks.button.signup" />
    </fieldset>
</template>

<script>
import FormComponent from '../../Mixins/FormComponent';
import Autogrow from 'vue-interface/src/Directives/Autogrow';
import GoogleMapsApiKey from '../../Mixins/GoogleMapsApiKey';
import PlaceAutofill from 'vue-place-autocomplete/src/Directives/PlaceAutofill';


export default {

    name: 'GoToWebinar',

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField'),
        BtnActivity: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/BtnActivity'),
        TextareaField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/TextareaField'),
        PlaceAutocompleteField: () => import(/* webpackChunkName: "vue-place-autocomplete" */'vue-place-autocomplete/src/PlaceAutocompleteField'),
    },

    directives: {
        Autogrow,
        PlaceAutofill
    },

    mixins: [
        FormComponent,
        GoogleMapsApiKey
    ],

    props: {
        submitting: Boolean
    },

    computed: {

        orientation() {
            return this.$parent.$parent.orientation;
        }

    }

};
</script>
