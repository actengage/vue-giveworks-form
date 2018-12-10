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
import AltEmailField from '../Survey/AltEmailField';
import AltPhoneField from '../Survey/AltPhoneField';
import BtnActivity from 'vue-interface/src/Components/BtnActivity';
import CheckboxField from '../Survey/CheckboxField';
import CityField from '../Survey/CityField';
import DollarAmountField from '../Survey/DollarAmountField';
import FirstField from '../Survey/FirstField';
import InputField from '../Survey/InputField';
import LastField from '../Survey/LastField';
import PageType from '../../Mixins/PageType';
import PrimaryEmailField from '../Survey/PrimaryEmailField';
import PrimaryPhoneField from '../Survey/PrimaryPhoneField';
import RadioField from '../Survey/RadioField';
import SelectField from '../Survey/SelectField';
import StateField from '../Survey/StateField';
import StreetField from '../Survey/StreetField';
import TextareaField from '../Survey/TextareaField';
import ZipField from '../Survey/ZipField';

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

    name: 'page-type-survey',

    extends: PageType,

    components: {
        AltEmailField,
        AltPhoneField,
        BtnActivity,
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

    methods: {

        component(name) {
            return COMPONENTS[name] || name;
        }

    }

};
</script>
