<template>
    <div id="app" class="container">
        <giveworks-form
            page-id="3048"
            api-key="$2y$10$baCh78EmFnJMkb2Dfv8YquITBf4lFv.LiS/kg08jDgJw5G5DWGhjq">
        </giveworks-form>
    </div>
</template>

<script>
import GiveworksForm from "./Components/GiveworksForm.vue";

export default {
    name: "app",
    components: {
        GiveworksForm
    }
};
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
