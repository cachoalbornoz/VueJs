<template>
  <input type="text" v-model="note" autofocus />
  <button @click="sendToServer"> Enviar nota al servidor</button>
  
  
  <RouterView></RouterView>
  
</template>

<script setup>

import { ref } from 'vue'

const note = ref('')

const sendToServer = async () => {

  const url = ''
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ',
    },
    body: JSON.stringify({
      note: note.value
    })
  })

  const response = await rawResponse.json()
}

</script>