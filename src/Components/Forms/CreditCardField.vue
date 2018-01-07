<template>

    <div class="form-control input-credit-card brand-unknown">
        <input type="text" class="input-credit-card-field input-credit-card-number" placeholder="Card number" maxlength="19" :value="card.number" :class="{'is-empty': !card.number, 'can-transform': card.number && card.number.length > 4}" @focus="addFocusClass($event.target); removeTransform($event.target); hideSecurityFields();" @blur="removeFocusClass($event.target, 'validateNumber');" @input="updateModel($event.target, 'number', 'validateNumber')">
        <div class="input-credit-card-security-fields">
            <input type="text" class="input-credit-card-field input-credit-card-expiration" placeholder="MM / YY" maxlength="7" :value="card.expiration" :class="{'is-empty': !card.expiration}" @focus="addFocusClass($event.target, true);" @blur="removeFocusClass($event.target, 'validateExpiration')" @input="updateModel($event.target, 'expiration', 'validateExpiration')" @keydown.delete="focusPrevElement($event.target)">
            <input type="text" class="input-credit-card-field input-credit-card-cvc" placeholder="CVC" maxlength="4" :class="{'is-empty': !card.cvc}" v-model="card.cvc" @focus="addFocusClass($event.target, true);" @blur="removeFocusClass($event.target, 'validateCvc')" @input="validateInput($event.target, 'validateCvc')" @keydown.delete="focusPrevElement($event.target)">
            <input type="text" class="input-credit-card-field input-credit-card-postal" placeholder="Zip" maxlength="5" :class="{'is-empty': !card.postalCode}" v-model="card.postalCode" @focus="addFocusClass($event.target, true);" @blur="removeFocusClass($event.target, 'validatePostalCode')" @input="validateInput($event.target, 'validatePostalCode')" @keydown.delete="focusPrevElement($event.target)">
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
        }
    },

    data() {
        return {
            card: {
                cvc: '',
                number: '',
                expiration: '',
                postalCode: ''
            }
        };
    },

    watch: {
        'card.number': function(newVal, oldVal) {
            this.addBrandClass(Payment.fns.cardType(newVal) || 'unknown');
        }
    },

    methods: {
        validate(el, method) {
            return el.value === '' || this[method](el.value);
        },
        validateInput(el, method) {
            setTimeout(() => {
                const isValid = this.validate(el, method);

                if(el.value === '' || el.maxLength !== el.value.length) {
                    this.removeHasClass(el);
                }
                else {
                    if(isValid) {
                        this.addHasClass(el);
                        this.focusNextElement(el);
                    }
                    else {
                        this.addErrorClass(el);
                        this.removeHasClass(el);
                    }
                }

                const payload = this.getEventPayload(el, isValid);

                this.$emit('change', payload);

                if(payload.complete) {
                    this.$el.classList.add('is-valid');
                    this.$emit('complete', payload);
                }
                else {
                    this.$el.classList.remove('is-valid');
                    this.$emit('incomplete', payload);
                }
            });
        },
        getEventPayload(el, isValid) {
            return {
                card: JSON.parse(JSON.stringify(this.card)),
                invalid: this.$el.classList.contains('is-invalid'),
                complete: this.isComplete(),
                input: {
                    el: el,
                    valid: isValid
                }
            }
        },
        updateModel(el, prop, method) {
            this.card[prop] = el.value;
            this.validateInput(el, method);
        },
        addHasClass(el) {
            this.$el.classList.add(this.getHasClassName(el));
        },
        removeHasClass(el) {
            this.$el.classList.remove(this.getHasClassName(el));
        },
        addErrorClass(el) {
            el.classList.add('is-invalid');
            this.$el.classList.add('is-invalid', this.getErrorClassName(el));
            this.removeHasClass(el);
        },
        removeErrorClass(el) {
            el.classList.remove('is-invalid');
            this.$el.classList.remove(this.getErrorClassName(el));

            if(!this.$el.querySelector('.input-credit-card-field.is-invalid')) {
                this.$el.classList.remove('is-invalid');
            }
        },
        addFocusClass(el, showSecurityFields) {
            el.classList.add('is-focused');
            this.$el.classList.add('has-focus', this.getFocusClassName(el));
            this.removeErrorClass(el);
            this.setTransform(this.$el.querySelector('.input-credit-card-number'));

            if(showSecurityFields) {
                this.showSecurityFields();
            }
        },
        removeFocusClass(el, method) {
            el.classList.remove('is-focused');
            this.$el.classList.remove('has-focus', this.getFocusClassName(el));

            if(this.shouldTransform()) {
                this.setTransform(this.$el.querySelector('.input-credit-card-number'));
            }

            if(!this.validate(el, method)) {
                this.addErrorClass(el);
                this.$emit('invalid', this.getEventPayload(el, false));
            }
        },
        hideSecurityFields() {
            this.$el.classList.remove('show-security-fields');
        },
        showSecurityFields() {
            this.$el.classList.add('show-security-fields');
        },
        isComplete() {
            return (
                this.$el.classList.contains('has-number') &&
                this.$el.classList.contains('has-expiration') &&
                this.$el.classList.contains('has-postal') &&
                this.$el.classList.contains('has-cvc')
            );
        },
        shouldTransform() {
            return (
                this.$el.classList.contains('is-invalid-expiration') ||
                this.$el.classList.contains('is-invalid-cvc') ||
                this.$el.classList.contains('is-invalid-postal')
            );
        },
        setTransform(el) {
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
        removeTransform(el) {
            el.style.transform = '';
        },
        focusNextElement(el) {
            if(el.nextElementSibling && el.nextElementSibling.children[0]) {
                el.nextElementSibling.children[0].focus();
            }
            else if(el.nextElementSibling) {
                el.nextElementSibling.focus();
            }
            else {
                el.blur();
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
        addBrandClass(brand) {
            this.removeBrandClass();
            this.$el.classList.add('brand-'+brand);
        },
        removeBrandClass() {
            for(let i in SUPPORTED_BRANDS) {
                this.$el.classList.remove('brand-'+SUPPORTED_BRANDS[i]);
            }
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
        }
    },

    mounted() {
        Payment.formatCardCVC(this.$el.querySelector('.input-credit-card-cvc'));
        Payment.restrictNumeric(this.$el.querySelector('.input-credit-card-postal'));
        Payment.formatCardNumber(this.$el.querySelector('.input-credit-card-number'));
        Payment.formatCardExpiry(this.$el.querySelector('.input-credit-card-expiration'));

        if(this.change) {
            this.$on('change', this.change);
        }

        if(this.complete) {
            this.$on('complete', response => {
                this.complete(response);
            });
        }

        if(this.invalid) {
            this.$on('invalid', response => {
                this.invalid(response);
            });
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

        & .input-credit-card-field {
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
            color: $gray-500;

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
