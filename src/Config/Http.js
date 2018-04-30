let domain;

switch(window.location.hostname) {
    case 'dev5.giveworks.net':
        domain = 'https://dev5.giveworks.net';
        break;
    case 'giveworks.net':
    case 'secure.giveworks.net':
        domain = 'https://secure.giveworks.net';
        break;
    default:
        domain = 'https://giveworks.test';
}

export default {

    baseURL: `${domain}/api/public/v1/`

}
