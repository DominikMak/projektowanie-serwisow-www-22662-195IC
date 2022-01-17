<template>
    <v-parallax src="../assets/background_programming.png">
        <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
            <v-layout justify-center align-center column pa-5>
                <div class="display-4 font-weight-black white--text text-xs-center">DOMINIK MAKUCH</div>
                <div class="display-4 font-weight-black white--text text-xs-center mb-3">VUETIFY + VUEROUTER</div>
                <div class="display-1 font-weight-bold white--text text-xs-center">Projektowanie serwisów WWW Lab nr 7.</div>
            </v-layout>
        </v-container>
    </v-parallax>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    
    width: 100%;
    height: 100%;
}
</style>