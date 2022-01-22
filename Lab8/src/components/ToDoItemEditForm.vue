<template>
  <!-- zawarcie edycji zadania w formie karty w celu uzyskania spójności z widokiem wyświetlania zadania -->
  <v-card class="mx-auto">
    <!-- formularz do edycji zadania -->
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSubmit">

    <!-- w sekcji tytułowej karty zawarty jest input do zmiany nazwy zawierający jako default value obecną nazwę -->
    <v-card-title>
        <v-text-field :id="id" v-model.lazy.trim="newLabel" :label="label" required></v-text-field>

        <!-- wyświetlanie alertu w przypadku nie podania nowej nazwy zadania bądź podania tej samej nazwy co stara -->
        <v-alert dense dismissible type="warning" v-if="show_alert"> You need to provide new To-do element name </v-alert>
    </v-card-title>

    <v-card-actions>
        <v-spacer></v-spacer>
        <!-- utowrzenie przycisku do anulowania edycji -->
        <v-btn icon @click="onCancel">
              <v-icon>mdi-cancel</v-icon>
        </v-btn>
        <!-- utworzenie przycisku do zapisania zmian -->
        <v-btn icon type="submit">
              <v-icon>mdi-content-save-check</v-icon>
        </v-btn>
    </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
export default {
  props: {
    // deifniowanie nazwy zadania
    label: {
      type: String,
      required: true
    },
    // definiowanie id zadania
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // zmienna dla nowej nazwy
      newLabel: this.label,
      // zmienna wyświetlająca alert
      show_alert: false
    };
  },
  methods: {
    // funkcja dodająca zmiany 
    onSubmit() {
      if (this.newLabel && this.newLabel !== this.label) {
        this.$emit("item-edited", this.newLabel);
      }
      else{
        this.show_alert = true;
      }
    },
    // funkcja anulująca zmiany
    onCancel() {
      this.$emit("edit-cancelled");
    },
  },
  mounted() {
     const labelInputRef = this.$refs.labelInput;
     labelInputRef.focus();
  }
};
</script>
<style scoped>
.edit-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;
}
input {
  display: inline-block;
  margin-top: 0.4rem;
  width: 100%;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #565656;
}
form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
form > * {
  flex: 0 0 100%;
}
</style>
