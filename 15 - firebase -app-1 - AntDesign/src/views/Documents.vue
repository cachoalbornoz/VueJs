<script setup>

import router from '../router';
import { message } from 'ant-design-vue';
import { useDatabaseStore } from '../store/database';

const useDataBase = useDatabaseStore();
useDataBase.getUrls()


const confirm = async (id) =>{
    await useDataBase.eliminar(id)
    message.success('Eliminado ')
}

const cancel = () => {
    return 
}

</script>

<template>

    <p v-if="useDataBase.loading">Processing ... </p>

    <a-space direction="vertical" style="width: 100%">

        <a-card v-for="item of useDataBase.documents" :key="item.id" :title="item.short" v-if="!useDataBase.loading">
            <template #extra>
                <a-space>
                    <a-button type="primary" @click="router.push(`/editar/${item.id}`)">Editar </a-button>

                    <a-popconfirm title="Confirma eliminar?" ok-text="Si" cancel-text="No" @confirm="confirm(item.id)" @cancel="cancel">
                        <a-button type="danger" :disabled="useDataBase.loading" :loading="useDataBase.loading">Eliminar </a-button>
                    </a-popconfirm>

                </a-space>
            </template>

            <p> {{ item.name }} </p>

        </a-card>

    </a-space>


</template>
