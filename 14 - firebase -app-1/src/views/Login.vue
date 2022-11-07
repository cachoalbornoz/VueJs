<template>



    <a-row>
        <a-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }">


            <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">

                <a-form-item label="Ingrese email" name="email" :rules="[{
                    required: true,
                    whitespace: true,
                    type: 'email',
                    message: 'Por favor, ingrese el email'
                }]">
                    <a-input v-model:value="formState.email" />
                </a-form-item>


                <a-form-item label="Ingrese su password" name="password" :rules="[{
                    required: true,
                    min: 6,
                    whitespace: true,
                    message: 'Por favor, ingrese su password de al menos 8 caracteres!'
                }]">
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>


                <a-form-item :wrapper-col="{ offset: 8, span: 16 }" :disabled="useStore.loadingUser">
                    <a-button type="primary" html-type="submit">Acceder</a-button>
                </a-form-item>

            </a-form>


        </a-col>

    </a-row>


</template>

<script setup>
import { reactive } from 'vue';
import { useUserStore } from '../store/user'

const useStore = useUserStore()

const formState = reactive({
    email: 'cachoalbornoz@test.com',
    password: '123456',
});

const onFinish = async () => {
    await useStore.loginUser(formState.email, formState.password)
}

const onFinishFailed = () => { }

</script>