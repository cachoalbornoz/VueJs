<template>
  <div class="row mt-5">
    <input
      type="text"
      class="form-control"
      placeholder="Ingrese un nombre"
      autofocus
      v-model.trim="tarea.nombre"
    />
  </div>

  <div class="row mt-5">
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

  <div class="row mt-5">
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

  <div class="row mt-5">
    <input
      type="number"
      class="form-control"
      placeholder="numero"
      v-model.number="tarea.numero"
    />
  </div>

  <div class="row mt-5">
    <button type="submit" :disabled="bloquear" class="btn btn-info">
      Procesar
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tarea: Object,
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

