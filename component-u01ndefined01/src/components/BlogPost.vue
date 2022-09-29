<script setup>

    const props = defineProps(
        [
            "title",
            "id",
            "body",
            "colorText",
        ]
    )

    // Ejemplo se puede escribir en consola, calcular, etc ... 

    console.log(props.title);

</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title" :class="`text-${colorText}`"> {{ id }} - {{ title }}</h5>
      <p> {{ body }} </p>
    </div>
  </div>
</template>