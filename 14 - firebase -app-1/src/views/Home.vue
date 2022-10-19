<template>
    <div>
        <h1>Home</h1>
        <hr />
        <p>Usuario : {{ email }} </p>
    </div>
</template>

<script setup>

import { useUserStore } from '../store/user'

const useStore = useUserStore()

const { email, uid } = useStore.userData

</script>

