<template>

  <!-- wykorzystanie komponentu v-form zamiast standardowego <form> -->
  <v-form @submit.prevent="onSubmit">
  <!------------------------------------------------------------------>

  <!-- tworzenie inputu tekstowego zawierającego przylegający na końcu przycisk, za pomocą którego dodawane jest nowe zadanie -->
    <v-text-field id="new-todo-input" name="new-todo" v-model.lazy.trim="label" label="What needs to be done?">
      <v-btn class="mx-2" fab dark color="indigo" type="submit" slot="append">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-text-field>
  <!---------------------------------------------------------------------------------------------------------------------------->

  <!-- tworzenie nowego alertu który za pomocą dyrektywy v-if jest wyświetlany w przypadku próby dodania nowego zadania bez zdefiniowania jego nazwy -->
    <v-alert dense dismissible type="warning" v-if="show_alert"> You need to provide new To-do element name </v-alert>
  <!--------------------------------------------------------------------------------------------------------------------------------------------------->
  </v-form>
  
</template>

<script>
export default {
  methods: {
    // metoda wywołująca się po wciśnięcu przycisku
    onSubmit() {
      // sprawdzanie czy podana została nazwa nowego zadania
      if(this.label === "") {
        // jeśli nie została podana wartośc zmiennej wywołującej alert zmieniana jest na true i zwracany jest pusty znak
        this.show_alert = true;
        return ""; 
        // -------------------------------------------------------------------------------------------------------------
      }
      // jeśli nazwa została podana tworzone jest nowe zadanie z podaną nazwą
      this.$emit('todo-added', this.label);
      // po czym zawartość inputu tekstowego jest zerowana
      this.label = "";
      // oraz wartość zmiennej wyświetlającej alert zmieniana jest na false
      this.show_alert = false;
    }
    // -------------------------------------------
  },
  data() {
    return {
      label: "",
      show_alert: false
    };
  }
};
</script>
