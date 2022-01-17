<template>
  <v-container>
    <div class="display-1 font-weight-light text-xs-center">3. v-autocomplete.</div>
    <v-autocomplete  
        v-model="values"
        :items="items"
        chips
        clearable
        deletable-chips
        dense
        multiple
        solo
    ></v-autocomplete>
  </v-container>
</template>

<script>
export default {
  name: "CiekaweThird",
  data: () => ({
      items: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Vue.js', 'Bootstrap'],
      values: ['foo', 'bar'],
      value: null,
    }),
  
};
</script>

<style scoped>
</style>