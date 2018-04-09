import { script } from 'vue-toolbox';
import VueToolbox from 'vue-toolbox';
import GiveworksForm from '@/Components/GiveworksForm';
import GiveworksFormPlugin from '@/Plugins/GiveworksForm';

Vue.use(VueToolbox);
Vue.use(GiveworksFormPlugin);

if(process.env.NODE_ENV === 'development') {
    const domain = (location.host || 'localhost').split(':')[0];
    const port = process.env.LIVERELOAD_OPTIONS && process.env.LIVERELOAD_OPTIONS.port;
    script(`https://${domain}:${port}/livereload.js?snipver=1`);
}

export default Vue.extend({

    components: {
        GiveworksForm
    }

});
