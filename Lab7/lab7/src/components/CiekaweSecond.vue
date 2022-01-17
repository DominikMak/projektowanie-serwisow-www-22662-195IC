<template>
  <v-container>
    <div class="display-1 font-weight-light text-xs-center">2. v-footer.</div>
    <v-footer dark padless>
      <v-card class="flex" flat color="pink darken-4">
        <v-card-title class="pink darken-2">
          <strong class="subheading">Przykład v-footer</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Dominik Makuch</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "CiekaweFirst",
  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
};
</script>

<style scoped>
</style>