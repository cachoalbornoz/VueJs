<template>

    <h1 class="text-center">Registro </h1>

    <a-row>
        <a-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }">

            <a-form ref="formRef" :model="formState" name="basicRegister" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">

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
                    message: 'Por favor, ingrese su password de al menos 6 caracteres!'
                }]
                ">
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>

                <a-form-item label="Repita Password" name="repassword" :rules="{ validator: validatePass }">
                    <a-input-password v-model:value="formState.repassword"></a-input-password>
                </a-form-item>

                <a-form-item :wrapper-col="{ span: 8, offset: 16 }">
                    <a-button type="primary" html-type="submit" :disabled="useStore.loadingUser" :loading="useStore.loadingUser">Registrase</a-button>
                    <a-button style="margin-left: 10px" @click="resetForm">Limpiar</a-button>
                </a-form-item>

            </a-form>

        </a-col>
    </a-row>

</template>

<script setup>

import { reactive, ref } from 'vue';
import { message } from 'ant-design-vue';
import { useUserStore } from '../store/user'

const useStore = useUserStore()

const formRef = ref();

const formState = reactive({
    email: 'cachoalbornoz@test.com',
    password: '',
    repassword: ''
});

let validatePass = async (_rule, value) => {
    if (value === '') {
        return Promise.reject('Repita contraseña');
    }

    if (value !== formState.password) {
        return Promise.reject('No coincide la contraseña');
    }

    return Promise.resolve()
};

const onFinish = async (values) => {

    const error = await useStore.registerUser(formState.email, formState.password)

    if (!error) {
        message.success('Bienvenido ')
        return ;
    }

    switch (error) {
        case 'auth/email-already-in-use':
            message.error('Email en uso');
            break;

        default:
            message.error('Revisar ' + error)
            break;
    }
}

const onFinishFailed = () => { }

const resetForm = () => {
    formState.email = null;
    formState.password = null;
    formState.repassword = null;
};


</script>