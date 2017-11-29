<template>

    <div>

        <fieldset class="mb-4">

            <legend>Your information</legend>

            <div class="form-group mb-2" v-if="page.options.add_title">
                <label class="text-bold" for="title">Title</label>
                <select name="title" id="title" class="custom-select form-control" v-model="title">
                    <option :value="title" v-for="title in titles">{{title}}</option>
                </select>
            </div>

            <div class="form-group mb-2">
                <label class="text-bold" for="first">First Name</label>
                <input type="text" name="first" id="first" class="form-control" v-model="first">
            </div>

            <div class="form-group mb-2">
                <label class="text-bold" for="last">Last Name</label>
                <input type="text" name="last" id="last" class="form-control" v-model="last">
            </div>

            <div class="form-group mb-2">
                <label class="text-bold" for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="you@example.com" v-model="email">
            </div>

            <div class="form-group mb-2">
                <label class="text-bold" for="street">Address</label>
                <input type="text" name="street" id="street" class="form-control" v-model="street">
            </div>

            <div class="form-group mb-2">
                <label class="text-bold" for="city">City</label>
                <input type="text" name="city" id="city" class="form-control" v-model="city">
            </div>

            <div class="row mb-2">
                <div class="col-sm-8">
                    <label class="text-bold" for="state">State</label>
                    <select name="state" id="state" class="custom-select form-control" v-model="state">
                        <option :value="value" v-for="(label, value) in states">{{label}}</options>
                    </select>
                </div>
                <div class="col-sm-4">
                    <label class="text-bold" for="zip">Zip</label>
                    <input type="text" name="zip" id="zip" class="form-control" v-model="zip">
                </div>
            </div>

            <div class="form-group mb-2" v-if="page.options.add_phone">
                <label class="text-bold" for="phone">Phone Number</label>
                <input type="text" name="phone" id="phone" class="form-control" v-model="phone">
            </div>

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
                        <input type="text" name="employer" id="employer" class="form-control" v-model="employer">
                    </div>
    			</div>
    			<div class="col-md-6">
                    <div class="form-group">
                        <label class="text-bold" for="occupation">Occupation</label>
                        <input type="text" name="occupation" id="occupation" class="form-control" v-model="occupation">
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
import BaseComponent from './BaseComponent.vue';

export default {

    extends: BaseComponent,

    data: function() {
        return {
            title: null,
            first: null,
            last: null,
            email: null,
            street: null,
            state: null,
            zip: null,
            phone: null,
            employer: null,
            occupation: null,
            recurring: 0
        };
    },

    computed: {
        isRetired: function() {
            return this.employer === 'Retired' && this.occupation === 'Retired';
        },
        shouldShowEmployment: function() {
            return (
                this.page.site.type === 'PAC' ||
                this.page.site.type === 'Campaign'

                // Remove this line before committing
                // || this.page.site.type === 'C4'
            );
        },
        employmentOccurMessage: function() {
            return this.page.site.emp_occ_msg || this.page.site.config.giveworks.emp_occ_msg;
        },
        titles: function() {
            return this.page.site.config.giveworks.titles;
        },
        states: function() {
            return States;
        }
    },

    methods: {
        setRetired: function(isChecked) {
            this.occupation = this.employer = isChecked ? 'Retired' : '';
        }
    },

    created: function() {
        this.$parent.$on('set-recurring', value => {
            this.recurring = value;
        });
    }

}
</script>
