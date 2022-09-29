<script setup>

    import { ref } from 'vue';

    const counter = ref(0)

    const incrementar = () => {
        counter.value++
    }

</script>

<template>
    <button @click="incrementar()"> Counter {{ counter }}</button>
</template>