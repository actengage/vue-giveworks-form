export default class Gateway {

    constructor(options) {
        this.options = options;

        if(!this.options) {
            throw new Error('A gateway must have some options passed to it!');
        }
    }

}
