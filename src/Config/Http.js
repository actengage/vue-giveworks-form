import Page from '/Http/Endpoints/Page';

export default {

    baseUrl: '/api/public/v1/',

    endpoints: {
        page: Page
    },

    defaultRequestOptions: {
        headers: {
            Authorization: false
        }
    }

}
