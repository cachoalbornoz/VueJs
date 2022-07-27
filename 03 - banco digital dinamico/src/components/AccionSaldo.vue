<template>
  <button :disabled="desactivar"> {{ texto }}</button>
</template>

<script>
export default {
  props:{
    texto: String,
    desactivar: {
      type:Boolean,
      default: false,
    }
  }

}
</script>

<style>

</style>
