<template>
  <form @submit.prevent="procesarFormulario">
    <!-- Input text -->
    <div class="mt-4">
      <input
        type="text"
        class="form-control"
        placeholder="Ingrese un nombre"
        v-model.trim="tarea.nombre"
      />
    </div>

    <!-- checkbox -->
    <div class="mt-4">
      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="check-1"
          value="Javascript"
          v-model="tarea.categorias"
        />
        <label for="check-1" class="form-check-label"> Javascript</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="check-2"
          value="Desarrollo"
          v-model="tarea.categorias"
        />
        <label for="check-2" class="form-check-label"> Desarrollo web</label>
      </div>
    </div>

    <!-- radio -->
    <div class="mt-4">
      <div class="form-check form-check-inline">
        <input
          type="radio"
          class="form-check-input"
          id="inlineRadio1"
          value="urgente"
          v-model="tarea.estado"
        />
        <label class="form-check-label" for="inlineRadio1"> Urgente</label>
      </div>

      <div class="form-check form-check-inline">
        <input
          type="radio"
          class="form-check-input"
          id="inlineRadio2"
          value="relax"
          v-model="tarea.estado"
        />
        <label class="form-check-label" for="inlineRadio2"> Relax </label>
      </div>
    </div>

    <!-- Number -->
    <div class="mt-4">
      <input
        type="number"
        class="form-control"
        placeholder="numero"
        v-model.number="tarea.numero"
      />
    </div>

    <!-- Button Submit -->
    <div class="mt-4">
      <button type="submit" :disabled="bloquear" class="btn btn-info">
        Procesar
      </button>
    </div>
  </form>

  <div class="mt-4">
    {{ tarea }}
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      tarea: {
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
      },
    };
  },
  methods: {
    procesarFormulario() {
      console.log(this.tarea);

      // Una vez enviados los datos, los puedo limpiar
      this.tarea = {
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
      };
      
    },
  },
  // Uso esta funcion para validar
  computed: {
    bloquear() {
      return this.tarea.nombre.trim() === "" ||
        this.tarea.categorias.length === 0 ||
        this.tarea.estado.trim() === "" ||
        this.tarea.numero == 0
        ? true
        : false;
    },
  },
};
</script>
