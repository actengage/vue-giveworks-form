# VueGiveworksForm

This plugin provides Vue.js component for the open [http://giveworks.net](Giveworks Platform).

## Dependencies

This component requires the following dependencies.

- [Vue.js](https://vuejs.org)
- [Axios.js](https://github.com/axios/axios)
- [Moment.js](https://momentjs.com)

## Installation

Given the plugin relies on the previous dependencies, there are a couple different ways to install the plugin. This library takes advantage of semantic versioning, and each release is not only available on NPM, but it's also pushed to multiple CDN's for fast and cacheable delivery.

#### NPM

    npm install vue lodash-es moment axios vue-giveworks-form --save

    // ES6
    import Vue from 'vue';
    import VueGiveworksForm from 'vue-giveworks-form';

    Vue.use(VueGiveworksForm);


#### CDN

It's also possible to include the library and the required dependencies directly with scripts.


    // Dependencies
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/moment@2.22.0/min/moment.min.js"></script>

Since the library uses semantic versioning, there are two ways to include the library. Always use the latest version...

    <script src="https://cdn.jsdelivr.net/npm/vue-giveworks-form"></script>

Since the library may change over time, it may be desired to update manually so only well tested, and stable version are used on client pages. To see an overview of the available versions, check the [CDN package directory](https://www.jsdelivr.com/package/npm/vue-giveworks-form).

    <script src="https://cdn.jsdelivr.net/npm/vue-giveworks-form@0.1.104/dist/vue-giveworks-form.min.js"></script>


## Basic Usage

To load the page data asynchronously given a page ID...

    <giveworks-form
        page-id="YOUR_PAGE_ID"
        api-key="YOU_API_KEY">
    </giveworks-form>

### Horizontal Orientation

    <giveworks-form
        page-id="YOUR_PAGE_ID"
        api-key="YOU_API_KEY"
        orientation="horizontal">
    </giveworks-form>

### Preload Page w/JSON object

You can skip loading the page asynchronously if the page JSON payload is already available. `PAGE_JSON` is just meant to be replaced with the page JSON, whether its with a Twig or Javascript.

*IMPORTANT - You must assign the global variable `GiveworksFormOptions` to the  `window` namespace BEFORE you load the `vue-giveworks-form.js` script.*

    <giveworks-form
        :data="page"
        api-key="YOU_API_KEY">
    </giveworks-form>

    <script type="text/javascript">
        // Insert your page JSON here... If coming from a Twig template, this
        var PAGE_JSON = {{ page.toJson() }};
        var GiveworksFormOptions = {
            data: {
                page: PAGE_JSON
            }
        }
    </script>
    <script src="https://cdn.jsdelivr.net/npm/vue-giveworks-form/dist/vue-giveworks-form.min.js"></script>
