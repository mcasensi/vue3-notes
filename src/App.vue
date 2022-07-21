<template>
    <div id="app">
        <HeaderComponentVue />
        <router-view></router-view>
        <FooterComponentVue />
    </div>
</template>

<script>
import HeaderComponentVue from "./components/HeaderComponent.vue";
import FooterComponentVue from "./components/FooterComponent.vue";

export default {
    name: "App",
    components: {
        HeaderComponentVue,
        FooterComponentVue,
    },
};
</script>
