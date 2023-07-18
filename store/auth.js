import nuxtStorage from 'nuxt-storage';
import { defineStore } from "pinia";
import { useRouter } from "nuxt/app";
 
export const useAuth = defineStore('authentication' , {
   state : () => ({
        authenticationAdmin : false,
        count : 0 ,
     }),
     getters : {
            double(state)  {
                  console.log(state.count)
            }
     },  
     actions : {
            handleLogin(username , password) {
                     const router = useRouter();
                     if(username.value === 'admin' && password.value === '123'){
                        nuxtStorage.localStorage.setData('authentication', true , 24 , 'h');
                        router.push({ path: "/admin" });
                     }
            },
}
})