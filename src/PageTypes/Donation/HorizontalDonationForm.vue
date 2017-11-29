<template>

    <form>

        <div class="row">

            <!-- Page Body Content -->
            <div class="col-sm-12" v-html="page.body"></div>

        </div>

        <div class="row">

            <div class="col-md-4">

                <select-donation-fieldset :page="page"></select-donation-fieldset>

            </div>

            <div class="col-md-4">

                <donor-info-fieldset :page="page"></donor-info-fieldset>

            </div>

            <div class="col-md-4">

                <payment-info-fieldset :page="page"></payment-info-fieldset>

            </div>

        </div>

    </form>

</template>

<script>
import BaseDonationForm from './BaseDonationForm.vue';

export default {

    extends: BaseDonationForm

}
</script>
