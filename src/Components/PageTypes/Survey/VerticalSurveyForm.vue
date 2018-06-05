<template>

    <div>
        <div v-for="question in page.questions">
            <component
                :value="form[`field_${question.id}`]"
                :is="component(question.type)"
                :name="`field_${question.id}`"
                :page="page"
                :form="form"
                :errors="errors"
                :question="question"/>
        </div>

        <btn-activity
            size="lg"
            type="submit"
            :block="true"
            orientation="right"
            :activity="submitting"
            :label="buttonLabel || page.site.config.giveworks.button.survey"/>
    </div>

</template>

<script>
import AltEmailField from './Fields/AltEmailField';
import AltPhoneField from './Fields/AltPhoneField';
import CheckboxField from './Fields/CheckboxField';
import CityField from './Fields/CityField';
import DollarAmountField from './Fields/DollarAmountField';
import FirstField from './Fields/FirstField';
import InputField from './Fields/InputField';
import LastField from './Fields/LastField';
import PrimaryEmailField from './Fields/PrimaryEmailField';
import PrimaryPhoneField from './Fields/PrimaryPhoneField';
import RadioField from './Fields/RadioField';
import SelectField from './Fields/SelectField';
import StateField from './Fields/StateField';
import StreetField from './Fields/StreetField';
import TextareaField from './Fields/TextareaField';
import ZipField from './Fields/ZipField';
import FormComponent from '@/Mixins/FormComponent';

const COMPONENTS = {
    1: 'RadioField',
    2: 'CheckboxField',
    3: 'InputField',
    4: 'TextareaField',
    10: 'AltEmailField',
    11: 'AltPhoneField',
    17: 'SelectField',
    18: 'DollarAmountField',
    'first': 'FirstField',
    'last': 'LastField',
    'email': 'PrimaryEmailField',
    'phone': 'PrimaryPhoneField',
    'street': 'StreetField',
    'city': 'CityField',
    'state': 'StateField',
    'zip': 'ZipField'
};

export default {

    components: {
        AltEmailField,
        AltPhoneField,
        CheckboxField,
        CityField,
        DollarAmountField,
        FirstField,
        InputField,
        LastField,
        PrimaryEmailField,
        PrimaryPhoneField,
        RadioField,
        SelectField,
        StateField,
        StreetField,
        TextareaField,
        ZipField
    },

    mixins: [
        FormComponent
    ],

    methods: {

        component(name) {
            return COMPONENTS[name] || name;
        }

    }

}
</script>
