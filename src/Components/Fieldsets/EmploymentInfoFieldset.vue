<template>

	<fieldset>

		<legend v-if="legends">Employment Information</legend>

		<p v-if="!recurring">
            <small class="text-muted" v-html="employmentOccurMessage"/>
		</p>

		<div class="row" v-if="!isRetired">
			<div class="col-md-6">
                <input-field v-model="form.employer" id="employer" name="employer" label="Employer" placeholder="Employer" :errors="errors" custom/>
			</div>
			<div class="col-md-6">
                <input-field v-model="form.occupation" id="occupation" name="occupation" label="Occupation" placeholder="Occupation" :errors="errors" custom/>
			</div>
		</div>

        <checkbox-field v-model="form.retired" name="retired" label="I'm retired" value="1" custom/>

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

    computed: {

        isRetired() {
            return this.employer === 'Retired' && this.occupation === 'Retired';
        },

        employmentOccurMessage() {
            return this.page.site.emp_occ_msg || this.page.site.config.giveworks.emp_occ_msg;
        }

    }

};
</script>
