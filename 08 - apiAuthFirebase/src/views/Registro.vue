<template>
  <h3 class="my-5">Registro de usuarios</h3>
  <form>

    <input 
        type="email" 
        placeholder="Email"
        class="form-control my-2"
        v-model.trim="email"
    />
    <input 
        type="password" 
        placeholder="password"
        class="form-control my-2"
        v-model.trim="pass1"
    />
    <input 
        type="password" 
        placeholder="Reingrese password"
        class="form-control my-2"
        v-model.trim="pass2"
    />
    <button 
        type="submit"
        class="btn btn-primary"
        :disabled="bloquear"
    >Registrar
    </button>

  </form>
</template>

<script>
export default {

    data(){
        return {
            email: '',
            pass1: '',
            pass2: '',
        }
    },
    computed:{

        bloquear(){
            // Si no incluye el @
            if(!this.email.includes("@")){
                return true
            }
            // Si la longitud no es minimamente 6 caract
            if(this.pass1.length > 5 && this.pass1 === this.pass2){
                return false
            }
           
            return true
            
        }

    }

}
</script>
