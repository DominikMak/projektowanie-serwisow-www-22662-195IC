<template>
    <v-container>
        <div class="display-1 font-weight-light text-xs-center">1. v-alert.</div>
        <v-layout column>
            <v-card elevation="2" shaped>
                <v-card-subtitle>Wciśnij przycisk aby wywołać alert, znika on po 3 sekundach od wywołania</v-card-subtitle>
                <v-divider class="mx-4"></v-divider>
                <v-app id="inspire">
                    <v-alert dense type="success" v-if="toggle">Świetna robota!</v-alert>
                    <v-card-actions>
                        <v-btn color="light" @click="showAlert()">Wywołaj alert!</v-btn>
                        <v-btn color="light">Licznik czasu (w sekundach): {{elapse}}</v-btn>
                    </v-card-actions>
                </v-app>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeDetails',
    data () {
        return {
        elapse: 0,
        toggle: false
        }
    },
    methods: {
        showAlert() {
            this.toggle = true
            let timer = this.showAlert.timer
            if (timer) {
                clearTimeout(timer)
            }
            
            this.elapse = 1 
            let t = this.showAlert.t
            if (t) {
                clearInterval(t)
            }
            
            this.showAlert.t = setInterval(() => {
                if (this.elapse === 3) {
                    this.elapse = 0
                    clearInterval(this.showAlert.t)
                    this.toggle = false
                }
                    else {
                        this.elapse++
                    }
            }, 1000)
        }
    }
};
</script>

<style scoped>
::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>