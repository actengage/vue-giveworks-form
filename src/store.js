import Vue from 'vue';
import Vuex from 'vuex';
import persistent from 'vuex-persistent-plugin/src/persistent';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        form: {}
    },

    plugins: [
        persistent({
            key: 'giveworks_demo',
            encryptionKey: 'kCpqNkWvRDLJgUTgxXDBFLiKVoLVZXov'
        })
    ],

    mutations: {

        form(state, value) {
            state.form = value;
        }

    }

});
