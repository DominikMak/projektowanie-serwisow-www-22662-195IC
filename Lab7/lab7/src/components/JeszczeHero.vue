<template>
  <v-container fluid>
    <div class="display-1 font-weight-light text-xs-center">1. v-data-iterator.</div>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="pink darken-3" class="mb-1">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Szukaj"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sortuj"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed color="pink" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="pink" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.imie"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.imie }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item v-for="(key, index) in filteredKeys" :key="index">
                  <v-list-item-content
                    :class="{ 'pink--text': sortBy === key }"
                  >
                    {{ key }}:
                  </v-list-item-content>
                  <v-list-item-content
                    class="align-end"
                    :class="{ 'pink--text': sortBy === key }"
                  >
                    {{ item[key.toLowerCase()] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Obiektów na stronie </span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text">
            Strona {{ page }} z {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="pink darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="pink darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  name: "JeszczeHero",
  data () {
      return {
        itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 4,
        sortBy: 'nazwisko',
        keys: [
          'Imie',
          'Nazwisko',
          'Ocena',
          'Indeks',
          'Wiek',
          'Rok',
          'Grupa',
          'Srednia',
        ],
        items: [
          {
            imie: 'Dominik',
            nazwisko: 'Makuch',
            ocena: 5,
            indeks: 22662,
            wiek: 23,
            rok: 3,
            grupa: 195,
            srednia: 4.9,
          },
          {
            imie: 'Marcin',
            nazwisko: 'Klisz',
            ocena: 3,
            indeks: 22812,
            wiek: 19,
            rok: 2,
            grupa: 185,
            srednia: 3.5,
          },
          {
            imie: 'Alex',
            nazwisko: 'Miarkowski',
            ocena: 4,
            indeks: 22452,
            wiek: 20,
            rok: 3,
            grupa: 195,
            srednia: 3.9,
          },
          {
            imie: 'Michał',
            nazwisko: 'Ptak',
            ocena: 2,
            indeks: 22882,
            wiek: 41,
            rok: 4,
            grupa: 182,
            srednia: 2.5,
          },
          {
            imie: 'Krzysztof',
            nazwisko: 'Kozak',
            ocena: 5,
            indeks: 22442,
            wiek: 68,
            rok: 4,
            grupa: 121,
            srednia: 5,
          },
          {
            imie: 'Wojtek',
            nazwisko: 'Gola',
            ocena: 3,
            indeks: 22122,
            wiek: 12,
            rok: 4.6,
            grupa: 201,
            srednia: 3.8,
          },
          {
            imie: 'Mariusz',
            nazwisko: 'Pudzianowski',
            ocena: 5,
            indeks: 10001,
            wiek: 42,
            rok: 1,
            grupa: 101,
            srednia: 5.5,
          },
          {
            imie: 'Anna',
            nazwisko: 'Mucha',
            ocena: 3,
            indeks: 22362,
            wiek: 24,
            rok: 3,
            grupa: 195,
            srednia: 3.9,
          },
        ],
      }
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Imie')
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    },
};
</script>

<style scoped>
.home-hero {
  width: 100%;
  height: 100%;
}
</style>