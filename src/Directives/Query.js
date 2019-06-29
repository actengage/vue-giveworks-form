function input(el) {
    if(['input', 'textarea', 'select'].indexOf(el.tagName) !== -1) {
        return el;
    }

    return Array.from(el.querySelectorAll('input, textarea, select')).reverse().pop();
}

export default {

    inserted(el, binding, vnode) {
        const field = input(el);
        const params = new URLSearchParams(location.search);
        const key = binding.value || field && field.getAttribute('name');
        const value = params.get(key);

        if(field && !field.value && !!value) {
            if(vnode.componentInstance) {
                vnode.componentInstance.$emit('input', value);
            }
            else {
                vnode.elm.value = value;
            }
        }
    }

};