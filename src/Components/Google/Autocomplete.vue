<template>
    <div class="form-group autocomplete-field" :class="{'was-validated': error || errors[name]}">
        <label v-if="label" v-html="label" :for="id || name" class="text-bold"></label>
        <input type="text" :name="name" :id="id || name" class="form-control" :class="{'is-invalid': error || errors[name]}" autocomplete="new-password" @keyup="keyup" @blur="blur($event)" @focus="show">
        <div v-if="error || errors[name]" class="invalid-feedback" v-html="error || errors[name].join('<br>')"></div>
        <google-autocomplete-list v-if="predictions && showPredictions" :items="predictions"></google-autocomplete-list>
    </div>
</template>

<script>
import { each } from 'lodash';
import { omitBy } from 'lodash';
import { isEmpty } from 'lodash';
import script from '/Helpers/Script';
import GoogleAutocompleteList from './AutocompleteList';

const KEYCODE = {
    ESC: 27,
    UP: 38,
    DOWN: 40,
    ENTER: 13
};

const API_REQUEST_OPTIONS = [
    'bounds',
    'location',
    'component-restrictions',
    'offset',
    'radius',
    'types'
];

/*
{
    // An array of types specifies an explicit type or a type collection, as listed in the supported types below. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the geocode and establishment types, but note that this will have the same effect as specifying no types. The supported types are: geocode instructs the Places service to return only geocoding results, rather than business results. address instructs the Places service to return only geocoding results with a precise address. establishment instructs the Places service to return only business results. the (regions) type collection instructs the Places service to return any result matching the following types: locality sublocality postal_code country administrative_area1 administrative_area2 the (cities) type collection instructs the Places service to return results that match either locality or administrative_area3.
    // Possible values: geocode, address, establishment, cities, locality, sublocality, postal_code, country, administrative_area1, administrative_area2
    type: undefined,

    // is a google.maps.LatLngBounds|google.maps.LatLngBoundsLiteral object specifying the area in which to search for places. The results are biased towards, but not restricted to, places contained within these bounds.
    bounds: undefined,

    // is a boolean specifying whether the API must return only those places that are strictly within the region defined by the given bounds. The API does not return results outside this region even if they match the user input.
    strictBounds: true|false,

    // can be used to restrict results to specific groups. Currently, you can use componentRestrictions to filter by up to 5 countries. Countries must be passed as as a two-character, ISO 3166-1 Alpha-2 compatible country code. Multiple countries must be passed as a list of country codes. z
    componentRestrictions: undefined,

    // can be used to instruct the Autocomplete widget to retrieve only Place IDs. On calling getPlace() on the Autocomplete object, the PlaceResult made available will only have the place id, types and name properties set. You can use the returned place ID with calls to the Places, Geocoding, Directions or Distance Matrix services.
    placeIdOnly: undefined,

    // is a google.maps.LatLng for prediction biasing. Predictions will be biased towards the given location and radius. Alternatively, bounds can be used.
    location: undefined,

    // is a number to determine the character position in the input term at which the service uses text for predictions (the position of the cursor in the input field).
    offset: undefined,

    // is a number to the radius of the area used for prediction biasing. The radius is specified in meters, and must always be accompanied by a location property. Alternatively, bounds can be used.
    radius: undefined
}
*/

export default {

    name: 'google-autocomplete-field',

    components: {
        GoogleAutocompleteList
    },

    props: {
        // Basic Display options
        'id': {
            type: [Boolean, String],
            default: false
        },
        'label': {
            required: true,
            type: String
        },
        'name': {
            required: true,
            type: String
        },
        'errors': {
            type: [Boolean, Object],
            required: false,
            default: false
        },
        'error': {
            type: [Boolean, String],
            required: false,
            default: false
        },

        // Google Maps options
        'api-key': {
            required: true,
            type: String
        },
        'bounds': {
            type: [Boolean, Object, String],
            default: false
        },
        'location': {
            type: [Boolean, Object, String],
            default: false
        },
        'component-restrictions': {
            type: [Boolean, Object, String],
            default: false
        },
        'offset': {
            type: Boolean,
            default: false
        },
        'radius': {
            type: Boolean,
            default: false
        },
        'types': {
            type: [Boolean, Array],
            default: false
        },

        // Event callback override parameters...
        'prediction-blur': {
            type: Function,
            default: function(event) {
                this.$focus = false;
            }
        },
        'prediction-focus': {
            type: Function,
            default: function(event) {
                this.$focus = event.target;
            }
        },
        'prediction-select': {
            type: Function,
            default: function(item) {
                this.select(item);
            }
        },
        'place-changed': {
            type: Function,
            default: function(place) {
                this.hide();
            }
        }
    },

    data() {
        return {
            predictions: false,
            showPredictions: false
        };
    },

    methods: {
        getInputElement() {
            return this.$el.querySelector('input');
        },
        getRequestOptions() {
            const options = {
                input: this.getInputElement().value
            };

            each(API_REQUEST_OPTIONS, key => {
                options[key] = this[key];
            });

            return omitBy(options, isEmpty);
        },
        select(item) {
            return new Promise((resolve, reject) => {
                this.$geocoder.geocode({placeId: item.place_id}, (response, status) => {
                    switch(status) {
                        case google.maps.places.PlacesServiceStatus.OK:
                            this.$emit('place:changed', response[0]);
                            this.$emit('autofill', response[0]);
                            resolve(response);
                            break;
                        default:
                            reject(status);
                    }
                });
            });
        },
        search() {
            return new Promise((resolve, reject) => {
                if(!this.getInputElement().value) {
                    this.predictions = false;
                    this.showPredictions = false;
                    reject();
                }
                else {
                    this.$autocompleteService.getPlacePredictions(this.getRequestOptions(), (response, status) => {
                        switch(status) {
                            case google.maps.places.PlacesServiceStatus.OK:
                                resolve(response);
                                break;
                            default:
                                reject(status);
                        }
                    });
                }
            });
        },
        blur(event) {
            if(!this.$el.querySelector('.is-focused')) {
                this.hide();
            }
        },
        keyup(event) {
            switch (event.keyCode) {
                case KEYCODE.ENTER:
                    if(this.$el.querySelector('.is-focused')) {
                        this.$el.querySelector('.is-focused a').click();
                    }
                    return;
                case KEYCODE.ESC:
                    this.hide();
                    this.getInputElement().blur();
                    return;
                case KEYCODE.UP:
                    this.up();
                    return;
                case KEYCODE.DOWN:
                    this.down();
                    return;
            }

            this.search().then(response => {
                this.showPredictions = true;
                this.predictions = response;
            }, error => {
                this.predictions = false;
            });
        },
        hide() {
            this.showPredictions = false;
        },
        show() {
            this.showPredictions = true;
        },
        up() {
            if(this.$focus) {
                this.$focus.classList.remove('is-focused');
            }

            this.$focus = !this.$focus || !this.$focus.previousSibling ?
                this.$el.querySelector('.autocomplete-list-item:last-child') :
                this.$focus.previousSibling;

            this.$focus.classList.add('is-focused');
        },
        down() {
            if(this.$focus) {
                this.$focus.classList.remove('is-focused');
            }

            this.$focus = !this.$focus || !this.$focus.nextSibling ?
                this.$el.querySelector('.autocomplete-list-item:first-child') :
                this.$focus.nextSibling;

            this.$focus.classList.add('is-focused');
        }
    },

    mounted() {
        script('https://maps.googleapis.com/maps/api/js?key='+this.apiKey+'&libraries=places', () => {
            this.$geocoder = new google.maps.Geocoder();
            this.$autocompleteService = new google.maps.places.AutocompleteService();
        });

        this.$on('place:changed', this.placeChanged);
        this.$on('prediction:blur', this.predictionBlur);
        this.$on('prediction:focus', this.predictionFocus);
        this.$on('prediction:select', this.predictionSelect);
    }

}
</script>

<style>
.autocomplete-field {
    position: relative;
}
</style>
