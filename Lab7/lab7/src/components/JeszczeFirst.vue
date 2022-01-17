<template>
  <v-container>
    <div class="display-1 font-weight-light text-xs-center">2. v-file-input.</div>
    <v-file-input
      @change="Preview_image"
      v-model="files"
      color="pink accent-4"
      counter
      label="Prześlij zdjęcie"
      placeholder="Wybierz pliki"
      prepend-icon="mdi-paperclip"
      outlined
      :show-size="1000"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip v-if="index < 2" color="pink accent-4" dark label small>
          {{ text }}
        </v-chip>

        <span
          v-else-if="index === 2"
          class="text-overline grey--text text--darken-3 mx-2"
        >
          +{{ files.length - 2 }} Plik(i)
        </span>
      </template>
    </v-file-input>
    <v-avatar><v-img :src="url" alt="logo"></v-img></v-avatar>
  </v-container>
</template>

<script>
export default {
  name: "JeszczeFirst",
    data: () => ({
      url: null,
      files: null,
    }),
    methods: {
        Preview_image() {
            this.url= URL.createObjectURL(this.files)
        }
    }

};
</script>

<style scoped>
.home-hero {
  width: 100%;
  height: 100%;
}
</style>