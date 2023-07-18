<template>
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">   
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" v-model="username">
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="password" autocomplete="on">
                            </div>
                            <button type="submit" class="w-full text-black bg-red-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
            <button @click.stop="() => warn('Form cannot be submitted yet.')">
                     Submit
            </button>
        </section>
   </div>
</template>

<script setup>

import { defineNuxtComponent, useState } from 'nuxt/app'
import { storeToRefs } from 'pinia'
import {useAuth} from '../store/auth'
import {useStatevalue} from '../composables/useUtils'
import { reactive } from 'vue'
import { cursorTo } from 'readline'
import { createUnzip } from 'zlib'

const store = useAuth()
const {authenticationAdmin} = storeToRefs(store)

const {handleLogin} = store

const username = ref('')
const password = ref('')

const handleSubmit = () => {
         handleLogin(username, password)
    
}
const counter = useState('counter', () => Math.round(Math.random() * 1000))
function warn(message) {
  // now we have access to the native event
  alert(message)
}


// const array = [1,2,3,4,5]

// let sum = array.reduce((previousValue, currentValue, index,array) => {
//         console.log(index , `index ${index}`)
//         console.log(array)
//       if(currentValue > previousValue){
//             return currentValue
//       }
// }, 0)

// console.log(sum)


const topSix = [
    { name: "Nigeria", position: "1st", points: 43 },
    { name: "England", position: "2nd", points: 37 },
    { name: "USA", position: "3rd", points: 35 },
    { name: "South Africa", position: "4th", points: 30 },
    { name: "Brazil", position: "5th", points: 27 },
    { name: "Korea", position: "6th", points: 23 }
]
const totalPoints = topSix.reduce((acc, currTeam) => acc + currTeam.points, 0);
console.log(totalPoints) // Prints 195  

const newstate = useColor()
console.log(newstate)

</script>