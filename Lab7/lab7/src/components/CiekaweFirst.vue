<template>
    <v-container>
        <div class="display-1 font-weight-light text-xs-center">1. v-dialog.</div>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on"> Wciśnij mnie! </v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5"> WOW! </v-card-title>
                <v-card-text>Ale świetny przykład użycia v-dialog.</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text disabled> Disagree </v-btn>
                <v-btn color="green darken-1" text @click="dialog = false"> Agree </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'CiekaweFirst',
    data () {
      return {
        dialog: false,
      }
    },
};
</script>

<style scoped>

</style>