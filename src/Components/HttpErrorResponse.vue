<template>
    <div class="alert alert-danger" :style="{'width': width, 'min-width': minWidth, 'max-width': maxWidth}">
        <h2 class="alert-header">{{ header }}</h2>
        <div class="alert-body">
            {{ error.message }}<br>
            {{ error.response.data.message }}
        </div>
    </div>
</template>

<script>
export default {

    name: 'http-error-response',

    props: {
        'width': String,
        'min-width': String,
        'max-width': String,
        'error': {
            type: Error,
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

<style>

</style>
