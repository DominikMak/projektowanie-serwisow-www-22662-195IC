<template>
  <!-- zawieranie nowych zadań w komponencie v-card w celu oddzielenia zadań od siebie i możliwości zmiany koloru ukończonej karty -->
  <v-card class="mx-auto" v-if="!isEditing" v-bind:class="{ done: isDone }">
  <!--------------------------------------------------------------------------------------------------------------------------------->

  <!-- tytuł karty to checkbox zawierający label o nazwie zadania -->
    <v-card-title> 
      <v-checkbox
              :label="label"
              color="green"
              value="success"
              hide-details
              :id ="id"
              :checked="isDone"
              @change="$emit('checkbox-changed')"
      ></v-checkbox>
    </v-card-title>
    <!-------------------------------------------------------------->

    <!-- Sekajca v-card-actions zawiera przyciski w formie ikon -->
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <!-- przycisk edycji zadania -->
          <v-btn icon @click="toggleToItemEditForm" v-bind="attrs" v-on="on">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <!----------------------------->
        </template>
        <span>Edit</span>
      </v-tooltip>
    
      <!-- przycisk usuwania zadania -->
      <v-btn icon @click="deleteToDo">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <!------------------------------->
    </v-card-actions>
  </v-card>

  <!-- wywołanie komponentu edycji zadania w przypadku wybrania przycisku edycji -->
  <to-do-item-edit-form
    v-else
    :id="id"
    :label="label"
    @item-edited="itemEdited"
    @edit-cancelled="editCancelled"
  ></to-do-item-edit-form>
  <!------------------------------------------------------------------------------->
</template>

<script>
// importowanie komponentu do edycji zadania
import ToDoItemEditForm from "./ToDoItemEditForm";
// -----------------------------------------

export default {
  // definiowanie komponentu do edycji zadania
  components: {
    ToDoItemEditForm
  },
  // -----------------------------------------

  // definiowanie właściwości dla zadania
  props: {
    // nazwa zadania
    label: { required: true, type: String },
    // sprawdzenie czy zadanie jest ukończone
    done: { default: false, type: Boolean },
    // id zadania
    id: { required: true, type: String }
  },
  data() {
    return {
      // zmienna sprawdzająca czy zadanie jest obecnie edytowane
      isEditing: false
    };
  },
  computed: {
    // definiowanie funkcji isDone() zwracajacej zmienną done
    isDone() {
      return this.done;
    }
  },
  methods: {
    // funkcja usuwająca zadanie 
    deleteToDo() {
      this.$emit("item-deleted");
    },

    // zmienianie właściowości zadania na edytowane
    toggleToItemEditForm() {
      console.log(this.$refs.editButton);
      this.isEditing = true;
    },

    // zwracanie edytowanego zadania
    itemEdited(newLabel) {
      this.$emit("item-edited", newLabel);
      this.isEditing = false;
      this.focusOnEditButton();
    },

    // anulowanie edycji zadania
    editCancelled() {
      this.isEditing = false;
      this.focusOnEditButton();
    },

    focusOnEditButton() {
      this.$nextTick(() => {
        const editButtonRef = this.$refs.editButton;
        editButtonRef.focus();
      });
    }
  }
};
</script>

<style scoped>
.custom-checkbox > .checkbox-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;
}
.custom-checkbox > .checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  height: 2.5rem;
  margin-top: 0;
  padding: 5px;
  border: 2px solid #0b0c0c;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.custom-checkbox > input:focus {
  outline: 3px dashed #fd0;
  outline-offset: 0;
  box-shadow: inset 0 0 0 2px;
}
.custom-checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 40px;
  margin-bottom: 10px;
  padding-left: 40px;
  clear: left;
}
.custom-checkbox > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
  margin: 0;
  opacity: 0;
}
.custom-checkbox > .checkbox-label {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  touch-action: manipulation;
}
.custom-checkbox > label::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid currentColor;
  background: transparent;
}
.custom-checkbox > input[type="checkbox"]:focus + label::before {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
.custom-checkbox > label::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 11px;
  left: 9px;
  width: 18px;
  height: 7px;
  transform: rotate(-45deg);
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  opacity: 0;
  background: transparent;
}
.custom-checkbox > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
@media only screen and (min-width: 40rem) {
  label,
  input,
  .custom-checkbox {
    font-size: 19px;
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
</style>
