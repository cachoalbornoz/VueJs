<script setup>
defineProps(["inicio", "fin", "maxRegistros"]);

const emit = defineEmits(["prev", "next"]);
</script>

<template>
  <div class="btn-group mb-2 mt-2" role="group" aria-label="Basic example">
    <button
      @click="emit('prev')"
      type="button"
      class="btn btn-outline-primary"
      :disabled="inicio <= 0"
    >
      Anterior {{ inicio }}
    </button>

    <button
      @click="emit('next')"
      type="button"
      class="btn btn-outline-primary"
      :disabled="fin >= maxRegistros"
    >
      Siguiente {{ maxRegistros }}
    </button>
  </div>
</template>