<template>
    <v-container>

        <div class="display-1 font-weight-light text-xs-center">3. v-stepper.</div>

        <v-stepper v-model="e1">
            <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1"> Ciasteczka </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2"> Dokumentacja </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3"> CSS </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
            <v-stepper-content step="1">
                <v-card class="mb-12" color="grey lighten-1"><v-img  src="../assets/meme1.png"></v-img></v-card>
                <v-btn color="primary" @click="e1 = 2"> Dalej </v-btn>

                <v-btn text @click="e1 = 1"> Anuluj </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
                <v-card class="mb-12" color="grey lighten-1"><v-img  src="../assets/meme2.png"></v-img></v-card>

                <v-btn color="primary" @click="e1 = 3"> Dalej </v-btn>

                <v-btn text @click="e1 = 1"> Anuluj </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
                <v-card class="mb-12" color="grey lighten-1"><v-img  src="../assets/meme3.png"></v-img></v-card>

                <v-btn color="primary" @click="e1 = 1"> Dalej </v-btn>

                <v-btn text @click="e1 = 1"> Anuluj </v-btn>
            </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-container>
</template>

<script>
export default {
    name: 'HomeThird',
    data () {
      return {
        e1: 1,
      }
    },
};
</script>

<style scoped>
</style>