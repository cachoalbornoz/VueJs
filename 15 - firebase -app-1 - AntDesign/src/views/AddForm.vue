<script setup>
import { reactive } from 'vue';
import { message } from 'ant-design-vue';
import { regExpUrl } from '../utils/regExpUrl'

import { useDatabaseStore } from '../store/database';

const useDataBase = useDatabaseStore()

const formState = reactive({
    url: ''
})


const onFinish = async (value) => {
    const error = await useDataBase.addUrl(formState.url)

    if(!error){
        message.success('Agregada correctamente ')
        formState.url = null
    }
}

</script>

<template>

    <a-form name="addForm" layout="horizontal" autocomplete="off" :model="formState" @finish="onFinish">

        <a-form-item :wrapper-col="{ span: 8 }" 
            label="Ingrese url" name="url" :rules="[{
            required: true,
            whitespace:true,
            pattern: regExpUrl,
            message: 'Por favor, ingrese la url'
        }]">
            <a-input v-model:value="formState.url" />
        </a-form-item>


        <a-form-item >
            <a-button type="primary" html-type="submit" :disabled="useDataBase.loading" :loading="useDataBase.loading">
                Agregar Url
            </a-button>
        </a-form-item>

    </a-form>

</template>

