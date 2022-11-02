import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite"
import { defineStore } from "pinia";
import { nanoid } from "nanoid";

import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";


export const useDatabaseStore = defineStore('database', {

    state: ()=> ({

        documents: [],
        loading: false,
        loadingDoc: false,
    }),

    actions : {

        async getUrls(){


            if(this.documents.length !== 0) return 

            this.loadingDoc = true;
            try {                
                const q = query( collection(db, 'urls'), where("user", '==', auth.currentUser.uid))
                const querySnapshot = await getDocs(q)

                querySnapshot.forEach(doc => {
                    
                    this.documents.push({
                        id: doc.id, 
                        ...doc.data()
                    })
                })

            } catch (error) {
                console.log(error);

            }finally {
                this.loadingDoc = false;
            }
        },

        async addUrl(name){

            this.loading = true
            try {
                const objetoDoc = {
                    name,
                    short : nanoid(6),
                    user: auth.currentUser.uid
                }
                const docRef = await addDoc(collection(db, "urls"), objetoDoc)

                this.documents.push({
                    ...objetoDoc,
                    id: docRef.id, 
                })

            } catch (error) {
                console.log(error);
            }finally{
                this.loading = false
            }
        },

        async eliminar(id){

            this.loadingDoc = true
            try {
                
                const docRef = doc(db, 'urls', id) 

                // Verifico si existe el documento
                const docUrl = await getDoc(docRef)
                if(!docUrl.exits()){
                    throw new Error("No existe el documento")
                }

                // Verifico si el usuario logueado coincide con el dueño del documento
                if(docUrl.data().user !== auth.currentUser.uid){
                    throw new Error("Usuario no autorizado")
                }

                // Borro el documento
                await deleteDoc(docRef)
                this.documents = this.documents.filter(item => item.id !== id)

            } catch (error) {
                console.log(error.message);
            }finally{
                this.loadingDoc = false
            }
            
        }

    }

})