import Vue from 'vue';

class GiveworksForm {

    constructor(selector) {
        this.vue = new Vue({
            el: selector
        });

        console.log('init vue!', this.vue);
    }

}

var main = function(selector) {
    return new GiveworksForm(selector);
};

export default main;
//# sourceMappingURL=giveworks-form.es6.js.map
