<template>

    <fieldset>
        
        <select-field v-if="page.options.add_title" v-model="form.title" name="title" label="Title" placeholder="Title" :errors="errors" custom>
            <option v-for="value in titles" :key="value" :value="value" v-html="value" />
        </select-field>

        <input-field v-model="form.first" v-query name="first" label="First Name" placeholder="First Name" :errors="errors" custom />

        <input-field v-model="form.last" v-query name="last" label="Last Name" placeholder="Last Name" :errors="errors" custom />

        <input-field v-model="form.email" v-query type="email" name="email" label="Email" placeholder="you@example.com" :errors="errors" custom />

        <input-field v-if="page.options.add_phone" v-query v-model="form.phone" name="phone" label="Phone Number" placeholder="Phone Number" :errors="errors" custom />

        <place-autocomplete-field
            v-if="address || page.options.add_street"
            v-model="form.street"
            v-query
            name="street"
            label="Address"
            placeholder="Address"
            :errors="errors"
            :api-key="mapApiKey"
            v-place-autofill:street.query="form.street"
            v-place-autofill:city="form.city"
            v-place-autofill:state.short="form.state"
            v-place-autofill:zip="form.zip"
            custom
        />

        <div v-if="address || page.options.add_city || page.options.add_zip" class="row">
            <div v-if="address || page.options.add_city" class="col-sm-8">
                <input-field v-model="form.city" v-query name="city" label="City" placeholder="City" :errors="errors" custom />
            </div>
            <div v-if="address || page.options.add_zip" :class="{'col-sm-4': address || page.options.add_city, 'col-sm-12': !address && !page.options.add_city}">
                <input-field v-model="form.zip" v-query name="zip" label="Zip" placeholder="Zip" :errors="errors" maxLength="5" custom />
            </div>
        </div>

        <select-field v-if="address || page.options.add_state" v-model="form.state" v-query name="state" label="State" :errors="errors" custom>
            <option v-for="(label, value) in states" :key="value" :value="value" v-html="label" />
        </select-field>

    </fieldset>

</template>

<script>
import Query from '../../Directives/Query';
import FormComponent from '../../Mixins/FormComponent';
import GoogleMapsApiKey from '../../Mixins/GoogleMapsApiKey';
import PlaceAutofill from 'vue-place-autocomplete/src/Directives/PlaceAutofill';

export default {

    name: 'contact-info-fieldset',

    mixins: [
        FormComponent,
        GoogleMapsApiKey
    ],

    components: {
        InputField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/InputField'),
        SelectField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/SelectField'),
        PlaceAutocompleteField: () => import(/* webpackChunkName: "place-autocomplete-field" */'vue-place-autocomplete/src/PlaceAutocompleteField')
    },

    directives: {
        Query,
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
            const states = Object.assign({}, this.page.site.config.states);

            delete states[''];
            delete states[' '];

            return states;
        }
    }

};
</script>
