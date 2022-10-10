import { defineStore } from "pinia";
import { ref } from "vue";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

// Devuelvo una FUNCION DE FLECHA
export const useUserStore = defineStore('users', () => {

    const users = ref([]) 
    const user = ref({
        'uid' : null,
        'email' : null,
        'password' : null,
    })

    const registerUser = async (email, password) =>{

        try {
                        
            const {user} = await createUserWithEmailAndPassword(auth, email, password)
            user.value = user
            console.log(user);

        } catch (error) {
            console.log(error);
        }
    }

    return {
        user,
        users,
        registerUser
    }
})