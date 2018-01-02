<template>
    <div class="gw-alert">
        <h1 class="gw-alert-header">{{ header }}</h1>
        <div class="gw-alert-body">{{ error.message }}</div>
    </div>
</template>

<script>
export default {

    name: 'http-error-response',

    props: {
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
