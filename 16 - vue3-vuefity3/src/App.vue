<template>
  <v-app>

    <v-app-bar color="primary" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Photos</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-main app>
      <v-container>
        <div class=" text-center">Hello Vuetify 3</div>

        <v-btn prepend-icon="mdi-google-downasaur" color="blue-grey darken-4" variant="elevated">
          Button
        </v-btn>

        <hr />
        <v-icon>mdi-google-downasaur</v-icon>

      </v-container>
    </v-main>

    <v-footer class="d-flex flex-column" app>
      <div class="bg-teal d-flex w-100 align-center px-4">
        <strong>Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"></v-btn>
      </div>

      <div class="px-4 py-2 bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>

  </v-app>
</template>

<script setup>

const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]

</script>
