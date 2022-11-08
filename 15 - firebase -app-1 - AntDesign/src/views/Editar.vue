<script setup>

import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router"
import { useDatabaseStore } from '../store/database';
import { regExpUrl } from '../utils/regExpUrl'

const route = useRoute()
const router = useRouter()

const useDataBase = useDatabaseStore()


const id = route.params.id;

const formState = reactive({
    url: ''
})

// Cuando se carga la pantalla - formulario
onMounted(async () => {
    formState.url = await useDataBase.editar(id)
})


// Cuando se presiona Editar
const onFinish = async (value) => {
    await useDataBase.update(id, formState.url)
}


const back = () => {
    router.push("/")
}

</script>


<template>

    <h1>Editar id: {{ $route.params.id }}</h1>

    <a-form name="addForm" layout="horizontal" autocomplete="off" :model="formState" @finish="onFinish">

        <a-row>
            <a-col :span="12">

                <a-form-item label="Ingrese url" name="url" :rules="[{
                    required: true,
                    whitespace: true,
                    pattern: regExpUrl,
                    message: 'Por favor, ingrese la url'
                }]">
                    <a-input v-model:value="formState.url" />
                </a-form-item>

            </a-col>
        </a-row>


        <a-row>
            <a-col>
                <a-space>

                    <a-form-item>
                        <a-button type="primary" html-type="submit" :disabled="useDataBase.loading" :loading="useDataBase.loading">
                            Editar Url
                        </a-button>
                    </a-form-item>

                    <a-form-item>
                        <a-button @click="back">
                            Volver
                        </a-button>
                    </a-form-item>
                    
                </a-space>
            </a-col>
        </a-row>

    </a-form>

</template>