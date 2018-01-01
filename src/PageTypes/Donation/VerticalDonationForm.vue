<template>

    <div>

        <div class="row">

            <div class="col-md-5 col-lg-4">

                <select-donation-fieldset :form="form" :errors="errors" :page="page"></select-donation-fieldset>

                <contact-info-fieldset :form="form" :errors="errors" :page="page"></contact-info-fieldset>

                <payment-info-fieldset :form="form" :errors="errors" :page="page"></payment-info-fieldset>

            </div>

            <!-- Page Body Content -->
            <div class="col-md-7 col-lg-8" v-html="page.body"></div>

        </div>

    <div>

</template>

<script>
import BaseDonationForm from './BaseDonationForm';

export default {

    extends: BaseDonationForm

}
</script>
