<template>
    <div>
        <h1>Home</h1>
        <hr />
        <p>Usuario : </p>
    </div>
</template>

<script setup>

import { storeToRefs } from "pinia"
import { useUserStore } from '../store/user'

const useUsers = useUserStore()
const { user } = storeToRefs(useUsers)


</script>

