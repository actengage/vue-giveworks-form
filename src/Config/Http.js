import Page from '/Http/Endpoints/Page';

export default {

    baseUrl: 'https://giveworks.test/api/public/v1/',

    endpoints: {
        page: Page
    },

    defaultRequestOptions: {
        headers: {
            Authorization: false
        }
    }

}
