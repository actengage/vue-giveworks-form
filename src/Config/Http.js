
export default function(env) {
    let domain;

    switch (env || window.location.hostname) {
        case 'staging':
        case 'dev5.giveworks.net':
            domain = 'https://dev5.giveworks.net';
            break;
        case 'production':
        case 'giveworks.net':
        case 'secure.giveworks.net':
            domain = 'https://secure.giveworks.net';
            break;
        default:
            domain = 'https://giveworks.test';
    }
    
    return {

        baseURL: `${domain}/api/public/v1/`

    }
}
