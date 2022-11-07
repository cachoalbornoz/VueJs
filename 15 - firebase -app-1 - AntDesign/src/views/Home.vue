<template>
    <div>
        <h1>Home</h1>
        <hr />
        <p>Usuario : {{ email }} </p>

        <AddForm />
        <Documents />
    </div>
</template>

<script setup>

import { useUserStore } from '../store/user'

import Documents from './Documents.vue';
import AddForm from './AddForm.vue';

const useStore = useUserStore()
const { email } = useStore.userData

</script>

