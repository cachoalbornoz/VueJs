<template>
  <form >
    <input 
      v-model="tarea.nombre"
      type="text"
      class="form-control"
      placeholder="Ingrese un nombre"
    />

    <!-- checkbox -->
    <div class="my-2">
      <div class="form-check form-check-inline">
        <input 
          type="checkbox"
          class="form-check-input"
          id="check-1"
          v-model="tarea.categoria"
          value="Javascript"
        >
        <label 
          for="check-1"
          class="form-check-label"
        >Javascript</label>
      </div>
      <div class="form-check form-check-inline">
        <input 
          type="checkbox"
          class="form-check-input"
          id="check-2"
          v-model="tarea.categoria"
          value="Desarrollo"
        >
        <label 
          for="check-2"
          class="form-check-label"
        >Desarrollo web</label>
      </div>
    </div>

  </form>

  <p>
    {{ tarea }}
  </p>
</template>

<script>


export default {
  name: 'Home',
  components: {
   
  },
  data() {
    return {
      tarea: {
        nombre: ''
      }
    }
  },
}
</script>
