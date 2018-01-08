<template>

    <div class="input-credit-card-wrapper">
        <div class="form-control input-credit-card brand-unknown">
            <input type="text" class="input-credit-card-field input-credit-card-number" placeholder="Card number" maxlength="19" :value="card.number" @focus="addFocusClass($event.target, 'validateNumber'); removeTransform($event.target); hideSecurityFields();" @blur="removeFocusClass($event.target, 'validateNumber');" @keyup="updateModel($event, 'number', 'validateNumber');">
            <div class="input-credit-card-security-fields">
                <input type="text" class="input-credit-card-field input-credit-card-expiration" placeholder="MM / YY" maxlength="7" :value="card.expiration" @focus="addFocusClass($event.target, 'validateExpiration', true);" @blur="removeFocusClass($event.target, 'validateExpiration')" @keyup="updateModel($event, 'expiration', 'validateExpiration')" @keydown.delete="focusPrevElement($event.target)">
                <input type="text" class="input-credit-card-field input-credit-card-cvc" placeholder="CVC" maxlength="4" autocomplete="off" v-model="card.cvc" @focus="addFocusClass($event.target, 'validateCvc', true);" @blur="removeFocusClass($event.target, 'validateCvc')" @input="validateInput($event, 'validateCvc')" @keydown.delete="focusPrevElement($event.target)">
                <input type="text" class="input-credit-card-field input-credit-card-postal" placeholder="Zip" maxlength="5" v-model="card.postalCode" @focus="addFocusClass($event.target, 'validatePostalCode', true);" @blur="removeFocusClass($event.target, 'validatePostalCode')" @input="validateInput($event, 'validatePostalCode')" @keydown.delete="focusPrevElement($event.target)">
            </div>

            <div class="input-credit-card-icon">
                <!-- <icon name="credit-card-alt" class="input-credit-card-icon" width="23.33" height="20"></icon> -->
                <icon name="cc-jcb" data-brand="jcb" class="input-credit-card-icon"></icon>
                <icon name="cc-visa" data-brand="visa" class="input-credit-card-icon"></icon>
                <icon name="cc-amex" data-brand="amex" class="input-credit-card-icon"></icon>
                <icon name="credit-card" data-brand="unknown" class="input-credit-card-icon" width="20" height="18"></icon>
                <icon name="cc-discover" data-brand="discover" class="input-credit-card-icon"></icon>
                <icon name="cc-mastercard" data-brand="mastercard" class="input-credit-card-icon"></icon>
                <icon name="cc-diners-club" data-brand="dinersclub" class="input-credit-card-icon"></icon>
            </div>

            <div class="input-credit-card-placeholder-mask">Number</div>
            <div class="input-credit-card-number-mask" v-html="card.number"></div>
        </div>

        <div class="invalid-feedback" v-if="error" v-html="error"></div>

    </div>

</template>

<script>
import Payment from 'payment';
import 'vue-awesome/icons/cc-jcb';
import 'vue-awesome/icons/warning';
import 'vue-awesome/icons/cc-visa';
import 'vue-awesome/icons/cc-amex';
import 'vue-awesome/icons/credit-card';
import 'vue-awesome/icons/cc-discover';
import 'vue-awesome/icons/cc-mastercard';
import 'vue-awesome/icons/cc-diners-club';
import 'vue-awesome/icons/credit-card-alt';
import Icon from 'vue-awesome/components/Icon';

const AVAILABLE_EVENTS = [
    'change',
    'invalid',
    'complete',
    'focus',
    'blur'
];

const SUPPORTED_BRANDS = [
    'unknown',
    'visa',
    'mastercard',
    'discover',
    'amex',
    'jcb',
    'dinersclub',
    'maestro',
    'laser',
    'unionpay',
    'elo',
    'hipercard'
];

export default {

    name: 'credit-card-field',

    components: {
        Icon,
    },

    props: {
        focus: {
            type: [Boolean, Function],
            default: false
        },
        blur: {
            type: [Boolean, Function],
            default: false
        },
        invalid: {
            type: [Boolean, Function],
            default: false
        },
        complete: {
            type: [Boolean, Function],
            default: false
        },
        change: {
            type: [Boolean, Function],
            default: false
        },
        error: {
            type: [Boolean, String],
            default: false
        }
    },

    data() {
        return {
            card: {}
        };
    },

    watch: {
        'card.number': function(newVal, oldVal) {
            this.handleTranformClass();
            this.addBrandClass(Payment.fns.cardType(newVal) || 'unknown');
            this.handleEmptyClass(this.$el.querySelector('.input-credit-card-number'), newVal);
        },
        'card.expiration': function(newVal, oldVal) {
            this.handleEmptyClass(this.$el.querySelector('.input-credit-card-expiration'), newVal);
        },
        'card.cvc': function(newVal, oldVal) {
            this.handleEmptyClass(this.$el.querySelector('.input-credit-card-cvc'), newVal);
        },
        'card.postalCode': function(newVal, oldVal) {
            this.handleEmptyClass(this.$el.querySelector('.input-credit-card-postal'), newVal);
        },
        error: function(newVal, oldVal) {
            if(newVal) {
                this.makeInvalid();
            }
        }
    },

    methods: {

        handleTranformClass() {
            this.card.number && this.card.number.length > 4 ?
            this.$el.querySelector('.input-credit-card-number').classList.add('can-transform') :
            this.$el.querySelector('.input-credit-card-number').classList.remove('can-transform');
        },

        handleEmptyClass(el, value) {
            return value === '' ? el.classList.add('is-empty') : el.classList.remove('is-empty');
        },

        addHasClass(el) {
            this.getCardField().classList.add(this.getHasClassName(el));
        },

        removeHasClass(el) {
            this.getCardField().classList.remove(this.getHasClassName(el));
        },

        addBrandClass(brand) {
            this.removeBrandClass();
            this.getCardField().classList.add('brand-'+brand);
        },

        removeBrandClass() {
            for(let i in SUPPORTED_BRANDS) {
                this.getCardField().classList.remove('brand-'+SUPPORTED_BRANDS[i]);
            }
        },

        addErrorClass(el) {
            this.removeHasClass(el);
            el.classList.add('is-invalid');
            el.classList.remove('is-valid');
            this.getCardField().classList.remove('is-valid');
            this.getCardField().classList.add('is-invalid', this.getErrorClassName(el));
        },

        removeErrorClass(el) {
            el.classList.remove('is-invalid');
            this.getCardField().classList.remove(this.getErrorClassName(el));

            if(!this.$el.querySelector('.input-credit-card-field.is-invalid')) {
                this.getCardField().classList.remove('is-invalid');
            }
        },

        addFocusClass(el, method, showSecurityFields) {
            this.removeErrorClass(el);
            el.classList.add('is-focused');
            this.addTransform(this.$el.querySelector('.input-credit-card-number'));
            this.getCardField().classList.add('has-focus', this.getFocusClassName(el));

            if(showSecurityFields) {
                this.showSecurityFields();
            }

            this.$emit('focus', this.getEventPayload(el, this.isValid(el, method)));
        },

        removeFocusClass(el, method) {
            el.classList.remove('is-focused');
            this.getCardField().classList.remove('has-focus', this.getFocusClassName(el));

            if(this.shouldTransform()) {
                this.addTransform(this.$el.querySelector('.input-credit-card-number'));
            }

            if(!this.isValid(el, method)) {
                this.addErrorClass(el);
            }

            this.$emit('blur', this.getEventPayload(el, this.isValid(el, method)));
        },

        addTransform(el) {
            if(el.classList.contains('can-transform')) {
                const defaultView = (el.ownerDocument || document).defaultView;
                const positionInfo = this.$el.querySelector('.input-credit-card-number-mask').getBoundingClientRect();
                const parts = el.value.split(' ');
                const totalWidth = positionInfo.width;
                const computedStyle = defaultView.getComputedStyle(el)
                const width = this.getTextWidth(parts[parts.length - 1].trim(), computedStyle.fontStyle+' '+computedStyle.fontSize+' '+computedStyle.fontFamily);

                el.style.transform = 'translateX('+((totalWidth - width) * -1)+'px)';
            }
        },

        shouldTransform() {
            return (
                this.getCardField().classList.contains('is-invalid-expiration') ||
                this.getCardField().classList.contains('is-invalid-cvc') ||
                this.getCardField().classList.contains('is-invalid-postal')
            );
        },

        removeTransform(el) {
            el.style.transform = '';
        },

        hideSecurityFields() {
            this.getCardField().classList.remove('show-security-fields');
        },

        showSecurityFields() {
            this.getCardField().classList.add('show-security-fields');
        },

        getDefaultCard() {
            return {
                number: this.$attrs.number || '',
                expiration: this.$attrs.expiration || '',
                cvc: this.$attrs.cvc || '',
                postalCode: this.$attrs.postalCode || ''
            };
        },

        getCardField() {
            return this.$el.querySelector('.input-credit-card');
        },

        getEventPayload(el, isValid) {
            const card = JSON.parse(JSON.stringify(this.card));
            const expiration = card.expiration.split('/');

            card.numberFormatted = card.number;
            card.number = card.number.replace(/\s/g, '');
            card.expMonth = expiration[0] ? expiration[0].trim() : null;
            card.expYear = expiration[1] ? expiration[1].trim() : null;

            return {
                card: card,
                valid: !this.getCardField().classList.contains('is-invalid'),
                complete: this.isComplete(),
                input: {
                    el: el,
                    valid: isValid
                }
            };
        },

        getTextWidth(text, font) {
            // re-use canvas object for better performance
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            context.font = font;
            var metrics = context.measureText(text);
            return metrics.width;
        },

        getClassName(el) {
            const classes = el.classList.item(1).split('-');
            return classes[classes.length - 1];
        },

        getHasClassName(el) {
            return 'has-' + this.getClassName(el);
        },

        getErrorClassName(el) {
            return 'is-invalid-' + this.getClassName(el);
        },

        getFocusClassName(el) {
            return 'has-focus-' + this.getClassName(el);
        },

        focusNextElement(el) {
            if(el.classList.contains('is-focused')) {
                if(el.nextElementSibling && el.nextElementSibling.children[0]) {
                    el.nextElementSibling.children[0].focus();
                }
                else if(el.nextElementSibling) {
                    el.nextElementSibling.focus();
                }
            }
        },

        focusPrevElement(el) {
            if(!el.value) {
                if(el.previousElementSibling) {
                    el.previousElementSibling.focus();
                }
                else {
                    this.$el.querySelector('.input-credit-card-number').focus();
                }
            }
        },

        makeValid() {
            this.getCardField().classList.add('is-valid');
            this.getCardField().classList.remove('is-invalid');
            this.$el.querySelectorAll('.is-invalid').forEach(el => {
                el.classList.remove('is-invalid');
            });
        },

        makeInvalid() {
            this.getCardField().classList.add('is-invalid');
            this.$el.querySelectorAll('.is-invalid').forEach(el => {
                el.blur();
            });
        },

        validateCvc(value) {
            return Payment.fns.validateCardCVC(value);
        },

        validateNumber(value) {
            return Payment.fns.validateCardNumber(value);
        },

        validateExpiration(value) {
            return Payment.fns.validateCardExpiry(value);
        },

        validatePostalCode(value) {
            return value.match(/^\d{5}(?:[-\s]\d{4})?$/) !== null;
        },

        validateInput(event, method) {
            setTimeout(() => {
                const el = event.target, isValid = this.isValid(el, method);

                if(el.value !== '' && isValid) {
                    this.addHasClass(el);
                    this.focusNextElement(el);
                }
                else if(!isValid) {
                    this.removeHasClass(el);

                    if(el.value === '' || el.maxLength === el.value.length) {
                        this.addErrorClass(el);
                    }
                }

                this.$emit('change', this.getEventPayload(el, isValid));
                this.$emit(isValid ? 'valid' : 'invalid', this.getEventPayload(el, isValid));
                this.$emit(this.isComplete() ? 'complete' : 'incomplete', this.getEventPayload(el, isValid));
            });
        },

        updateModel(event, prop, method) {
            this.card[prop] = event.target.value;

            if(this.isPrintableKeyCode(event.keyCode)) {
                this.validateInput(event, method);
            }
        },

        isPrintableKeyCode(keycode) {
            return (
                (keycode > 47 && keycode < 58)   || // number keys
                keycode == 32 || keycode == 13   || // spacebar & return key(s) (if you want to allow carriage returns)
                (keycode > 64 && keycode < 91)   || // letter keys
                (keycode > 95 && keycode < 112)  || // numpad keys
                (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
                (keycode > 218 && keycode < 223)   // [\]' (in order)
            );
        },

        isValid(el, method) {
            return el.value === '' || this[method](el.value);
        },

        isComplete() {
            return (
                this.getCardField().classList.contains('has-number') &&
                this.getCardField().classList.contains('has-expiration') &&
                this.getCardField().classList.contains('has-postal') &&
                this.getCardField().classList.contains('has-cvc')
            );
        }
    },

    created() {
        this.card = this.getDefaultCard();
    },

    mounted() {
        Payment.formatCardCVC(this.$el.querySelector('.input-credit-card-cvc'));
        Payment.restrictNumeric(this.$el.querySelector('.input-credit-card-postal'));
        Payment.formatCardNumber(this.$el.querySelector('.input-credit-card-number'));
        Payment.formatCardExpiry(this.$el.querySelector('.input-credit-card-expiration'));

        for(let i in AVAILABLE_EVENTS) {
            if(this[AVAILABLE_EVENTS[i]]) {
                this.$on(AVAILABLE_EVENTS[i], this[AVAILABLE_EVENTS[i]]);
            }
        }
    }

}
</script>

<style lang="scss">
    @import "./node_modules/the-one-true-form/src/Helpers/Variables.scss";

    .form-control.input-credit-card {
        box-sizing: border-box;
        padding: ($input-padding-x * 1.125) ($input-padding-y * 1.125);
        overflow: hidden;
        position: relative;

        ::-webkit-input-placeholder {
            color: $gray-500;
        }
        ::-moz-placeholder {
            color: $gray-500;
        }
        :-ms-input-placeholder {
            color: $gray-500;
        }
        :-moz-placeholder {
            color: $gray-400;
        }

        .input-credit-card-security-fields {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        & + .invalid-feedback {
            display: block;
        }

        & .input-credit-card-field {
            z-index: 1;
            position: absolute;
            top: $input-padding-y / 1.25;
            border: none;
            outline: 0;
            background: none;
            box-shadow: none;
            line-height: 1rem;
            transition: transform ease 0.25s;

            &.is-invalid {
                color: $form-feedback-invalid-color;
            }
        }

        & .input-credit-card-icon {
            position: absolute;
            left: 0;
            top: 2.25px;
            height: 1.75rem;
            width: 2.5rem;
            padding: 0 .5rem;
            background: white;
            z-index: 2;
            color: $gray-700;

            & svg {
                display: none;
            }
        }

        &:not(.brand-jcb):not(.brand-visa):not(.brand-amex):not(.brand-discover):not(.brand-mastercard):not(.brand-discover) svg[data-brand="unknown"],
        &.brand-jcb svg[data-brand="jcb"],
        &.brand-visa svg[data-brand=visa],
        &.brand-amex svg[data-brand="amex"],
        &.brand-discover svg[data-brand="discover"],
        &.brand-mastercard svg[data-brand="mastercard"],
        &.brand-dinersclub svg[data-brand="dinersclub"] {
            display: inline-block;
        }

        & .input-credit-card-placeholder-mask,
        & .input-credit-card-number-mask {
            width: auto;
            opacity: 0;
            position: absolute;
            color: $gray-500;
            top: 0.56rem;
            left: 2.5rem;
            line-height: 1rem;
            min-height: 20px;
            font-size: 1rem;
            white-space: nowrap;
        }

        & .input-credit-card-placeholder-mask {
            padding: 2px 0;
            transition: opacity ease 0.25s;
        }

        & .input-credit-card-number {
            left: 2.5rem;
            width: 10rem;
        }

        & .input-credit-card-expiration {
            right: $input-padding-y / 2;
            left: auto;
            width: 4rem;
        }

        & .input-credit-card-cvc {
            width: 2.5rem;
            right: -2.5rem;
        }

        & .input-credit-card-postal {
            width: 3rem;
            right: -3rem;
        }

        &.show-security-fields {
            & .input-credit-card-expiration {
                transform: translateX(-7rem);
            }
            & .input-credit-card-cvc {
                transform: translateX(-6.75rem);
            }
            & .input-credit-card-postal {
                transform: translateX(-3.5rem);
            }
        }

        &.has-focus {
            outline: none;
            border-color: $input-focus-border-color;
            box-shadow: $input-focus-box-shadow;
        }

        &.is-invalid,
        &:invalid {
            outline: none;
            border-color: $form-feedback-invalid-color;
            box-shadow: 0 0 0 0.2rem rgba($form-feedback-invalid-color, .25);

            & .input-credit-card-icon {
                color: $form-feedback-invalid-color;
            }
        }

        &.is-valid,
        &:valid {
            outline: none;
            border-color: $form-feedback-valid-color;
            box-shadow: 0 0 0 0.2rem rgba($form-feedback-valid-color, .25);

            & .input-credit-card-icon {
                color: $form-feedback-valid-color;
            }
        }

        &.has-focus:not(.has-focus-number) {
            & .input-credit-card-number.is-empty {
                opacity: 0;
            }
            & .input-credit-card-number.is-empty ~ .input-credit-card-placeholder-mask {
                opacity: 1;
            }
        }

        /*
        &.has-focus-expiration,
        &.is-invalid-expiration:not(.has-focus) {
            & .input-credit-card-expiration {
                transform: translateX(-4rem);
            }
            & .input-credit-card-cvc {
                transform: translateX(-.5rem);
            }
        }

        &.has-focus-cvc,
        &.is-invalid-cvc:not(.has-focus),
        &.has-focus-postal,
        &.is-invalid-postal:not(.has-focus) {
            & .input-credit-card-expiration {
                transform: translateX(-8rem);
            }
            & .input-credit-card-cvc {
                transform: translateX(-5rem);
            }
            & .input-credit-card-postal {
                transform: translateX(-1rem);
            }
        }
        */

    }

</style>
