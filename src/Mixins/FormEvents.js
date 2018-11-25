import { camelCase } from 'vue-interface/src/Helpers/Functions';

const EVENTS = [
    'submit',
    'redirect',
    'submit-enable',
    'submit-disable',
    'submit-show',
    'submit-hide'
];

export default {

    directives: {
        bindEvents: {
            bind(el, binding, vnode) {
                const context = vnode.context;
                const subject = vnode.child || vnode.context;

                for(const i in EVENTS) {
                    subject.$on(EVENTS[i], (...args) => {
                        const method = camelCase('on-' + EVENTS[i]);

                        if(subject !== context) {
                            context.$emit(EVENTS[i], ...args);
                        }

                        if(context[method]) {
                            context[method](...args);
                        }
                    });
                }
            }
        }
    }

};
