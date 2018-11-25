<template>

	<fieldset>

		<legend v-if="legends">Employment Information</legend>

		<p v-if="!recurring">
			<small class="text-muted" v-html="employmentOccurMessage"/>
		</p>

		<input-field v-if="!isRetired" ref="employer" v-model="form.employer" id="employer" name="employer" label="Employer" placeholder="Employer" :disabled="isRetired" :errors="errors" custom/>
		<input-field v-if="!isRetired" ref="occupation" v-model="form.occupation" id="occupation" name="occupation" label="Occupation" placeholder="Occupation" :disabled="isRetired" :errors="errors" custom/>
		<checkbox-field v-model="form.retired" label="I'm retired" value="1" custom/>

	</fieldset>

</template>

<script>
import FormComponent from '../../Mixins/FormComponent';
import InputField from 'vue-interface/src/Components/InputField';
import CheckboxField from 'vue-interface/src/Components/CheckboxField';

export default {

    name: 'employment-info-fieldset',

    mixins: [
        FormComponent
    ],

    components: {
        InputField,
        CheckboxField
    },

    watch: {

        'form.retired': function(value) {
            if(value && value.length) {
                this.form.employer = this.form.occupation = 'Retired';
            }
            else {
                this.form.employer = this.form.occupation = '';
            }
        }

    },

    computed: {

        isRetired() {
            return !!(this.form.retired && this.form.retired.length);
        },

        employmentOccurMessage() {
            return this.page.site.emp_occ_msg || this.page.site.config.giveworks.emp_occ_msg;
        }

    }

};
</script>
