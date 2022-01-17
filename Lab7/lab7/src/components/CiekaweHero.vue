<template>
        
            <v-carousel>
                <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"  reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
            </v-carousel>

</template>

<script>
export default {
    name: 'CiekaweHero',
    data () {
      return {
        items: [
          {
            src: require('../assets/dog1.png'),
          },
          {
            src: require('../assets/dog2.png'),
          },
          {
            src: require('../assets/dog3.png'),
          },
          {
            src: require('../assets/dog4.png'),
          },
        ],
      }
    },
};
</script>

<style scoped>
.home-hero {
    
    width: 100%;
    height: 100%;
}

</style>