<template>
    <div class="alert alert-danger" :style="{'width': width, 'min-width': minWidth, 'max-width': maxWidth}">
        <h2 class="alert-header">{{ header }}</h2>
        <div class="alert-body">
            {{ error.message }}<br>
            {{ error.data.errors || error.response.data.message }}
        </div>
    </div>
</template>

<script>
export default {

    name: 'http-error-response',

    props: {
        width: String,
        minWidth: String,
        maxWidth: String,
        'error': {
            type: [Object, Error],
            default() {
                return {};
            }
        },
        'header': {
            type: String,
            default: 'Error!'
        }
    }

}
</script>
