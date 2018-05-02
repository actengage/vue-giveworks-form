<template>

    <div>

        <fieldset class="mb-4">

            <legend>Your information</legend>

            <select-field v-if="page.options.add_title" v-model="form.title" name="title" label="Title" :options="titles" :errors="errors"/>

            <input-field v-model="form.first" name="first" label="First Name" :errors="errors"/>

            <input-field v-model="form.last" name="last" label="Last Name" :errors="errors"/>

            <input-field v-model="form.email" type="email" name="email" label="Email" placeholder="you@example.com" :errors="errors"/>

            <input-field v-if="page.options.add_phone" v-model="form.phone" name="phone" label="Phone Number" :errors="errors"/>

            <place-autocomplete-field
                v-if="address || page.options.add_street"
                v-model="form.street"
                name="street"
                label="Address"
                :errors="errors"
                api-key="AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU"
                v-place-autofill.street="form.street"
                v-place-autofill.city="form.city"
                v-place-autofill.state="form.state"
                v-place-autofill.zip="form.zip"
            />

            <div v-if="address || page.options.add_city || page.options.add_zip" class="row">
                <div v-if="address || page.options.add_city" class="col-sm-8">
                    <input-field v-model="form.city" name="city" label="City" :errors="errors"/>
                </div>
                <div v-if="address || page.options.add_zip" :class="{'col-sm-4': address || page.options.add_city, 'col-sm-12': !address && !page.options.add_city}">
                    <input-field v-model="form.zip" name="zip" label="Zip" :errors="errors"/>
                </div>
            </div>

            <select-field v-if="address || page.options.add_state" v-model="form.state" name="state" label="State" :errors="errors">
                <option v-for="(label, value) in states" value="value" v-html="label"/>
            </select-field>

            <input-field v-if="page.options.add_phone" v-model="form.phone" name="phone" label="Phone Number" :errors="errors"/>

        </fieldset>

    	<fieldset v-if="shouldShowEmployment">

    		<legend>Employment Information</legend>

			<p v-if="!recurring">
                <small class="text-muted" v-html="employmentOccurMessage"></small>
			</p>

    		<div class="row" v-if="!isRetired">
    			<div class="col-md-6">
                    <input-field v-model="form.employer" id="employer" name="employer" label="Employer" :errors="errors"/>
    			</div>
    			<div class="col-md-6">
                    <input-field v-model="form.occupation" id="occupation" name="occupation" label="Occupation" :errors="errors"/>
    			</div>
    		</div>

            <div class="form-group">
                <label class="custom-control custom-checkbox">
                    <input v-model="form.retired" type="checkbox" name="retired" value="1" class="custom-control-input" @change="setRetired($event.target.checked)">
                    <span class="custom-control-indicator"></span>
                    <small class="custom-control-label text-muted form-text">I'm retired</small>
                </label>
            </div>

    	</fieldset>

    </div>

</template>

<script>
import map from 'lodash-es/map';
import each from 'lodash-es/each';
import filter from 'lodash-es/filter';
import compact from 'lodash-es/compact';
import findIndex from 'lodash-es/findIndex';
import States from '@/Config/States';
import FormComponent from '@/Mixins/FormComponent';

export default {

    name: 'contact-info-fieldset',

    mixins: [
        FormComponent
    ],

    props: {
        address: Boolean
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
        }
    },

    methods: {

        onAutofill(place) {
            const addressComponents = {
                'address': ['street_number', 'route'],
                'city': ['sublocality', 'locality'],
                'state': ['administrative_area_level_1'],
                'zip': ['postal_code']
            };

            each(addressComponents, (parts, field) => {
                const part = compact(map(place.address_components, component => {
                    return findIndex(component.types, part => {
                        return parts.indexOf(part) !== -1;
                    }) !== -1 ? component.short_name : null;
                })).join(' ');
            });
        },

        setRetired(isChecked) {
            this.occupation = this.employer = isChecked ? 'Retired' : '';
        }

    },

    created() {
        this.$dispatch.on('place:changed', place => {
            this.$el.querySelector('[name="street"]').value = 'test';
        });
    },

    beforeDestroy() {
        this.$dispatch.off('place:changed');
    }

}
</script>
