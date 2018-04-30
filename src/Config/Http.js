let domain;

console.log('http config', domain);

switch(window.location.hostname) {
    case 'localhost':
    case 'giveworks.test':
        domain = 'https://giveworks.test';
        break;
    case 'dev5.giveworks.net':
        domain = 'https://dev5.giveworks.net';
        break;
    default:
        domain = 'https://secure.giveworks.net';
}

export default {

    baseURL: `${domain}/api/public/v1/`

}
