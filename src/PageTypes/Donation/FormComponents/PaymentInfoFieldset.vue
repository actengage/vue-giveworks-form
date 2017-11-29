<template>

    <fieldset>

        <legend>Payment information</legend>

        <div class="row mb-3">
            <div class="col-sm-4">
                <button type="button" class="btn btn-secondary btn-block py-4" :class="{'btn-info': gateway === 'cc'}" @click="setPaymentGateway('cc')">
                    <icon name="credit-card" scale="2"></icon>
                </button>
            </div>
            <div class="col-sm-4">
                <button type="button" class="btn btn-secondary btn-block py-4" :class="{'btn-info': gateway === 'paypal'}" @click="setPaymentGateway('paypal')">
                    <icon name="paypal" scale="2"></icon>
                </a>
            </div>
            <div class="col-sm-4">
                <button type="button" class="btn btn-secondary btn-block py-4" :class="{'btn-info': gateway === 'btc'}" @click="setPaymentGateway('btc')">
                    <icon name="btc" scale="2"></icon>
                </button>
            </div>
        </div>

        <div class="row my-2">
            <div class="col-sm-8">
                <div class="form-group mb-2">
                    <label class="text-bold" for="number">Credit Card Number</label>
                    <input type="text" name="number" id="number" value="" class="form-control">
                </div>
            </div>

            <div class="col-sm-4">
                <div class="form-group mb-2">
                    <label class="text-bold" for="ccv">CVV</label>
                    <input type="text" name="ccv" id="ccv" value="" class="form-control">
                </div>
            </div>
        </div>

        <div class="row mb-2">

            <div class="col-sm-6">
                <div class="form-group mb-2">
                    <label class="text-bold" for="cc_month">Expiration Month</label>
                    <select name="cc_month" id="cc_month" class="custom-select form-control">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="form-group mb-2">
                    <label class="text-bold" for="exp_year">Expiration Year</label>
                    <select name="exp_year" id="exp_year" class="custom-select form-control">
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                    </select>
                </div>
            </div>

        </div>

        <div v-if="page.options.add_comment" class="form-group">
            <label for="comment" class="text-bold" v-html="commentMessage"></label>
            <textarea name="comment" id="comment" class="form-control"></textarea>
        </div>

        <button type="submit" class="btn btn-lg btn-block btn-primary" v-html="buttonLabel"></button>

        <div v-if="page.options.add_optin">
            <label class="custom-control custom-checkbox">
                <input type="checkbox" name="optin" class="custom-control-input" checked>
                <span class="custom-control-indicator"></span>
                <small v-html="optinMessage" class="custom-control-description text-muted form-text"></small>
            </label>
        </div>

        <div v-if="page.site.disclaimer" class="mt-3"><small class="text-muted" v-html="page.site.disclaimer"></small></div>

    </fieldset>

</template>

<script>

// Icons that are used on this page
import 'vue-awesome/icons/btc';
import 'vue-awesome/icons/paypal';
import 'vue-awesome/icons/credit-card';

import Icon from 'vue-awesome/components/Icon';
import BaseComponent from './BaseComponent.vue';

export default {

    extends: BaseComponent,

    components: {
        Icon
    },

    data: function() {
        return {
            gateway: 'cc'
        };
    },

    computed: {
        commentMessage: function() {
            return this.page.options.comment_message || 'Comment';
        },
        optinMessage: function() {
            return this.page.options.optin_message || 'Yes, I\'d like to stay informed by joining your mailing list!';
        },
        buttonLabel: function() {
            return this.page.options.button || 'Donate Now!';
        }
    },

    methods: {
        setPaymentGateway: function(gateway) {
            this.gateway = gateway;
        }
    }

}

</script>
