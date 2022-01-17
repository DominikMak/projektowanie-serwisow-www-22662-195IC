<template>
    <v-container>
        <div class="display-1 font-weight-light text-xs-center">2. v-bottom-sheet.</div>
        <v-card elevation="4" outlined>
                <v-card-subtitle>Wciśnij przycisk aby wyświetlić "bottom sheet"</v-card-subtitle>
                <v-divider class="mx-5"></v-divider>
                <v-card-actions>
                <v-btn color="blue" dark @click="sheet = !sheet"> Open v-model </v-btn>
                </v-card-actions>
                <v-bottom-sheet v-model="sheet">
                <v-sheet class="text-center" height="200px">
                    <v-btn class="mt-6" text color="red" @click="sheet = !sheet"> Zamknij </v-btn>
                    <div class="py-3">
                    Uwielbiam Vuetify ♥
                    </div>
                </v-sheet>
                </v-bottom-sheet>

        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
    data: () => ({
        sheet: false
    })
};
</script>

<style scoped>
</style>