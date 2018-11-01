<template>

    <div>
        <component :is="page.options.service.split('\\').pop()" :submitting="submitting" :page="page" :form="form" :errors="errors" />
    </div>

</template>

<script>
import GoToWebinar from './Apis/GoToWebinar';
import FormComponent from '@/Mixins/FormComponent';
import VerticalSignupForm from './VerticalSignupForm';

export default {

    extends: VerticalSignupForm,

    components: {
        GoToWebinar
    },

    mixins: [
        FormComponent
    ]

};
</script>
