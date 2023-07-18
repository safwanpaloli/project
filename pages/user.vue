<template>
     <div v-if="user === 'safwan'">
            <ProfileAvatar/>
     </div>
     <div v-else><UserAvatar/></div>
</template>


<script setup>
 
 const user = ref('helo')

</script>

