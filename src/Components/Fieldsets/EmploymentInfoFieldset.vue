<template>
    <fieldset>
        <!-- <h3 v-if="legends">Employment Information</h3> -->

        <p v-if="!form.recurring">
            <small class="text-muted" v-html="employmentOccurMessage" />
        </p>

        <input-field v-if="!isRetired"
        id="employer"
        ref="employer"
        v-model="form.employer"
        v-query
        name="employer"
        label="Employer"
        placeholder="Employer"
        :disabled="isRetired"
        :errors="errors"
        custom />
        <input-field v-if="!isRetired"
        id="occupation"
        ref="occupation"
        v-model="form.occupation"
        v-query
        name="occupation"
        label="Occupation"
        placeholder="Occupation"
        :disabled="isRetired"
        :errors="errors"
        custom />
		
        <div class="form-group">
            <checkbox-field v-model="form.retired" v-query label="I'm retired" value="1" custom />
        </div>
    </fieldset>
</template>

<script>
import Query from '../../Directives/Query';
import FormComponent from '../../Mixins/FormComponent';

export default {

    name: 'EmploymentInfoFieldset',

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField'),
        CheckboxField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/CheckboxField'),
    },

    directives: {
        Query
    },

    mixins: [
        FormComponent
    ],

    props: {
        legends: {
            type: Boolean,
            default: true
        }
    },

    computed: {

        isRetired() {
            return !!(this.form.retired && this.form.retired.length);
        },

        employmentOccurMessage() {
            return this.page.site.emp_occ_msg || this.page.site.config.giveworks.emp_occ_msg;
        }

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

    }

};
</script>
