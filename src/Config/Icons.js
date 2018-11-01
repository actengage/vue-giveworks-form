// Load the icons
import 'vue-credit-card-field/src/icons';
import { faApplePay } from '@fortawesome/free-brands-svg-icons/faApplePay';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons/faCheckCircle';
import { faGoogleWallet } from '@fortawesome/free-brands-svg-icons/faGoogleWallet';

// Load the font awesome library
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
    faApplePay,
    faCheckCircle
);

export {
    faApplePay,
    faCheckCircle,
    faGoogleWallet
};
