<template>

    <div>
        <component :is="page.options.service.split('\\').pop()" :submitting="submitting" :page="page" :form="form" :errors="errors" />
    </div>

</template>

<script>
import FormComponent from '@/Mixins/FormComponent';
import GoToWebinar from './Apis/GoToWebinar';

export default {

    components: {
        GoToWebinar
    },

    mixins: [
        FormComponent
    ]

}
</script>
