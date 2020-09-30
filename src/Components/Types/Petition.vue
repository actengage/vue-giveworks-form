<template>
    <div>
        <contact-info-fieldset :legends="false" :form="form" :errors="errors" :page="page" />

        <textarea-field v-if="page.options.add_comment" id="comment" v-model="form.comment" v-autogrow :label="commentMessage" />

        <btn-activity
            size="lg"
            type="submit"
            orientation="right"
            :block="true"
            :activity="submitting"
            :label="buttonLabel || page.site.config.giveworks.button.petition" />

        <checkbox-field v-if="page.options.add_optin" :label="optinMessage" value="1" custom />
    </div>
</template>

<script>
import PageType from '../../Mixins/PageType';

export default {

    name: 'PageTypePetition',

    components: {
        CheckboxField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/CheckboxField'),
        BtnActivity: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/BtnActivity'),
        TextareaField: () => import(/* webpackChunkName: "vue-interface" */'vue-interface/src/Components/TextareaField'),
        ContactInfoFieldset: () => import(/* webpackChunkName: "contact-info-fieldset" */'../Fieldsets/ContactInfoFieldset'),
        EmploymentInfoFieldset: () => import(/* webpackChunkName: "employment-info-fieldset" */'../Fieldsets/EmploymentInfoFieldset')
    },

    extends: PageType

};
</script>
