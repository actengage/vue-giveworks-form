import each from 'lodash-es/each';
import script from 'vue-interface/src/Helpers/Script';
import GiveworksForm from '@/Components/GiveworksForm';
import GiveworksFormPlugin from '@/Plugins/GiveworksForm';

Vue.use(GiveworksFormPlugin);

export default Vue.extend({

    components: {
        GiveworksForm
    }

});
