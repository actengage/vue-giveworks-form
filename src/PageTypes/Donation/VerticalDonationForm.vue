<template>

    <form class="container">

        <div class="row">

            <div class="col-md-5 col-lg-4">

                <select-donation-fieldset :page="page"></select-donation-fieldset>

                <contact-info-fieldset :page="page"></contact-info-fieldset>

                <payment-info-fieldset :page="page"></payment-info-fieldset>

            </div>

            <!-- Page Body Content -->
            <div class="col-md-7 col-lg-8" v-html="page.body"></div>

        </div>

    </form>

</template>

<script>
import BaseDonationForm from './BaseDonationForm';

export default {

    extends: BaseDonationForm

}
</script>
