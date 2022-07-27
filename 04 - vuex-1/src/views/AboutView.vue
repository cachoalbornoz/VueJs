<template>
  <div class="about">
    <h1>Mi contador {{ contador }}</h1>
    <hr/>
    <input type="text" v-model="textoAbout">
    <h2>{{ textoAbout }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'About',
  computed: {
    ...mapState(['contador'])
  },
  data() {
    return {
      textoAbout: ''
    }
  },
}
</script>
