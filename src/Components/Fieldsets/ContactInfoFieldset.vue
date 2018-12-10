<template>

    <fieldset>

        <h3 v-if="legends">Your information</h3>

        <select-field v-if="page.options.add_title" v-model="form.title" name="title" label="Title" placeholder="Title" :errors="errors" custom>
            <option v-for="value in titles" :value="value" v-html="value"/>
        </select-field>

        <input-field v-model="form.first" name="first" label="First Name" placeholder="First Name" :errors="errors" custom/>

        <input-field v-model="form.last" name="last" label="Last Name" placeholder="Last Name" :errors="errors" custom/>

        <input-field v-model="form.email" type="email" name="email" label="Email" placeholder="you@example.com" :errors="errors" custom/>

        <input-field v-if="page.options.add_phone" v-model="form.phone" name="phone" label="Phone Number" placeholder="Phone Number" :errors="errors" custom/>

        <place-autocomplete-field
            v-if="address || page.options.add_street"
            v-model="form.street"
            name="street"
            label="Address"
            placeholder="Address"
            :errors="errors"
            api-key="AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU"
            v-place-autofill:street.query="form.street"
            v-place-autofill:city="form.city"
            v-place-autofill:state.short="form.state"
            v-place-autofill:zip="form.zip"
            custom
        />

        <div v-if="address || page.options.add_city || page.options.add_zip" class="row">
            <div v-if="address || page.options.add_city" class="col-sm-8">
                <input-field v-model="form.city" name="city" label="City" placeholder="City" :errors="errors" custom/>
            </div>
            <div v-if="address || page.options.add_zip" :class="{'col-sm-4': address || page.options.add_city, 'col-sm-12': !address && !page.options.add_city}">
                <input-field v-model="form.zip" name="zip" label="Zip" placeholder="Zip" :errors="errors" maxLength="5" custom/>
            </div>
        </div>

        <select-field v-if="address || page.options.add_state" v-model="form.state" name="state" label="State" :errors="errors" custom>
            <option v-for="(label, value) in states" :value="value" v-html="label"/>
        </select-field>

    </fieldset>

</template>

<script>
import States from '../../Config/States';
import FormComponent from '../../Mixins/FormComponent';
import InputField from 'vue-interface/src/Components/InputField';
import SelectField from 'vue-interface/src/Components/SelectField';
import PlaceAutofill from 'vue-place-autocomplete/src/PlaceAutofill';
import PlaceAutocompleteField from 'vue-place-autocomplete/src/PlaceAutocompleteField';

export default {

    name: 'contact-info-fieldset',

    mixins: [
        FormComponent
    ],

    components: {
        InputField,
        SelectField,
        PlaceAutocompleteField
    },

    directives: {
        PlaceAutofill
    },

    props: {
        address: Boolean,
        legends: {
            type: Boolean,
            default: true
        }
    },

    computed: {

        titles() {
            return this.page.site.config.giveworks.titles;
        },

        states() {
            return States;
        }
    }

};
</script>
