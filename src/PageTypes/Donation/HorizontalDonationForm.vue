<template>

    <form >

        <div class="row">

            <!-- Page Body Content -->
            <div class="col-sm-12" v-html="page.body"></div>

        </div>

        <div class="row">

            <div class="col-md-4">

                <select-donation-fieldset :form="form" :page="page"></select-donation-fieldset>

            </div>

            <div class="col-md-4">

                <contact-info-fieldset :form="form" :page="page"></contact-info-fieldset>

            </div>

            <div class="col-md-4">

                <payment-info-fieldset :form="form" :page="page"></payment-info-fieldset>

            </div>

        </div>

        {{ form }}

    </form>

</template>

<script>
import BaseDonationForm from './BaseDonationForm';

export default {

    extends: BaseDonationForm

}
</script>
