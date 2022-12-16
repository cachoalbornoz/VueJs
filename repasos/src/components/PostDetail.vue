<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <p> {{ content }} </p>
        <input type="text" v-model="message" />
        <button @click="saludar">Saludo</button>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const message = ref('')

const props = defineProps({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: false,
        default: 'Sin contenido'
    },
})

const emit = defineEmits(['saludo'])

const saludar = () => {
    emit("saludo", message.value)
}

</script>

<style scoped>
.post {
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>