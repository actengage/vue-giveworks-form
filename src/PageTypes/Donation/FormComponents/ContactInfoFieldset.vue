<template>

    <div>

        <fieldset class="mb-4">

            <legend>Your information</legend>

            <select-field v-if="page.options.add_title" name="title" label="Title" :options="titles" :form="form" :errors="errors"></select-field>

            <input-field name="first" label="First Name" :form="form" :errors="errors"></input-field>

            <input-field name="last" label="Last Name" :form="form" :errors="errors"></input-field>

            <input-field type="email" name="email" label="Email" placeholder="you@example.com" :form="form" :errors="errors"></input-field>

            <input-field name="street" label="Address" :form="form" :errors="errors"></input-field>

            <input-field name="city" label="City" :form="form" :errors="errors"></input-field>

            <div class="row">
                <div class="col-sm-8">
                    <select-field name="state" label="State" :options="states" :form="form" :errors="errors"></select-field>
                </div>
                <div class="col-sm-4">
                    <input-field name="zip" label="Zip" :form="form" :errors="errors"></input-field>
                </div>
            </div>

            <input-field v-if="page.options.add_phone" name="phone" label="Phone Number" mask="(999) 999-9999" :form="form" :errors="errors"></input-field>

        </fieldset>

    	<fieldset v-if="shouldShowEmployment">
    		<legend>Employment Information</legend>

			<p v-if="!recurring">
                <small class="text-muted" v-html="employmentOccurMessage"></small>
			</p>

    		<div class="row" v-if="!isRetired">
    			<div class="col-md-6">
                    <div class="form-group">
                        <label class="text-bold" for="employer">Employer</label>
                        <input type="text" name="employer" id="employer" class="form-control" v-model="form.employer">
                    </div>
    			</div>
    			<div class="col-md-6">
                    <div class="form-group">
                        <label class="text-bold" for="occupation">Occupation</label>
                        <input type="text" name="occupation" id="occupation" class="form-control" v-model="form.occupation">
                    </div>
    			</div>
    		</div>

            <div class="form-group">
                <label class="custom-control custom-checkbox">
                    <input type="checkbox" name="retired" value="1" class="custom-control-input" @change="setRetired($event.target.checked)">
                    <span class="custom-control-indicator"></span>
                    <small class="custom-control-description text-muted form-text">I'm retired</small>
                </label>
            </div>

    	</fieldset>

    </div>

</template>

<script>
import States from '/Config/States';
import BaseComponent from './BaseComponent';
import InputField from '/Components/Forms/InputField';
import SelectField from '/Components/Forms/SelectField';

export default {

    extends: BaseComponent,

    components: {
        InputField,
        SelectField
    },

    computed: {
        isRetired() {
            return this.employer === 'Retired' && this.occupation === 'Retired';
        },

        shouldShowEmployment() {
            return (
                this.page.site.type === 'PAC' ||
                this.page.site.type === 'Campaign'
            );
        },

        employmentOccurMessage() {
            return this.page.site.emp_occ_msg || this.page.site.config.giveworks.emp_occ_msg;
        },

        titles() {
            return this.page.site.config.giveworks.titles;
        },

        states() {
            return States;

            const states = [];

            for(let i in States) {
                states.push({
                    value: i,
                    label: States[i]
                });
            }

            return states;
        }
    },

    methods: {
        setRetired(isChecked) {
            this.occupation = this.employer = isChecked ? 'Retired' : '';
        }
    }

}
</script>
