import Page from '/Http/Endpoints/Page';

export default {

    baseUrl: 'https://giveworks.dev/api/v1/',

    endpoints: {
        page: Page
    },

    defaultRequestOptions: {
        headers: {
            Authorization: false
        }
    }

}
