import nuxtStorage from 'nuxt-storage';

export default defineNuxtRouteMiddleware((to , from) => {
        const authentication = nuxtStorage.localStorage.getData('authentication')
        if(authentication && to.path !== '/admin'){ 
                return navigateTo('/admin')
              }
              else if (!authentication && to.path !== '/'){
                return navigateTo('/')  
              }
              return
        
})