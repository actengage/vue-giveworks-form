<script>
import BaseType from './BaseType';
import { extend } from 'lodash';

export default {

    name: 'activity-indicator-spinner',

    extends: BaseType,

    props: extend({}, BaseType.props, {
        nodes: {
            type: Number,
            default: 12
        }
    })
}
</script>
