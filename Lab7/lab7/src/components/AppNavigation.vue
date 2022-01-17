<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="pink lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index">
                        <v-list-item-content>
                            <router-link :to="{path:item.route}">{{item.title}}</router-link>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar color="pink darken-4" dark>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/"> <v-avatar> <img src="../assets/logo_2.png" alt="logo"> </v-avatar> </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn to="/" text class="hidden-sm-and-down">Home</v-btn>
            <v-btn to="/ciekawe_komponenty" text class="hidden-sm-and-down">Ciekawe komponenty</v-btn>
            <v-btn to="/jeszcze_ciekawsze_komponenty" text class="hidden-sm-and-down">Jeszcze ciekawsze komponenty</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Meal Prep',
            drawer: false,
            items: [
                { title: 'Home', route: '/' },
                { title: 'Ciekawe komponenty', route: '/ciekawe_komponenty' },
                { title: 'Jeszcze ciekawsze komponenty', route: '/jeszcze_ciekawsze_komponenty' }
            ]
        };
    }
};
</script>

<style scoped>
a, a:visited {
    color: white;
    text-decoration: none;
}
</style>