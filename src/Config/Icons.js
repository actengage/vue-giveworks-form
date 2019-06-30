// Load the icons
import 'vue-credit-card-field/src/icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons/faPaypal';
import { faApplePay } from '@fortawesome/free-brands-svg-icons/faApplePay';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons/faCheckCircle';
import { faGoogleWallet } from '@fortawesome/free-brands-svg-icons/faGoogleWallet';

// Load the font awesome library
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
    faPaypal,
    faApplePay,
    faCheckCircle,
    faGoogleWallet
);

export {
    faApplePay,
    faCheckCircle,
    faGoogleWallet
};
