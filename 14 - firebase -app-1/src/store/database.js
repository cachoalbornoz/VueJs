import { defineStore } from "pinia";

export const useDatabaseStore = defineStore('database', {

    state: ()=> ({

        documents: [],
    }),

    actions : {

    }

})