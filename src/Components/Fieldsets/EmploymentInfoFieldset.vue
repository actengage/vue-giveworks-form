<template>

	<fieldset>

		<!-- <h3 v-if="legends">Employment Information</h3> -->

		<p v-if="!form.recurring">
			<small class="text-muted" v-html="employmentOccurMessage"/>
		</p>

		<input-field v-if="!isRetired" ref="employer" v-model="form.employer" v-query id="employer" name="employer" label="Employer" placeholder="Employer" :disabled="isRetired" :errors="errors" custom/>
		<input-field v-if="!isRetired" ref="occupation" v-model="form.occupation" v-query id="occupation" name="occupation" label="Occupation" placeholder="Occupation" :disabled="isRetired" :errors="errors" custom/>
		
        <div class="form-group">
            <checkbox-field v-model="form.retired" v-query label="I'm retired" value="1" custom/>
        </div>
        
	</fieldset>

</template>

<script>
import Query from '../../Directives/Query';
import FormComponent from '../../Mixins/FormComponent';

export default {

    name: 'employment-info-fieldset',

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField'),
        CheckboxField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/CheckboxField'),
    },

    props: {
        legends: {
            type: Boolean,
            default: true
        }
    },

    mixins: [
        FormComponent
    ],

    directives: {
        Query
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
