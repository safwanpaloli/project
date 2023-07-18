
<template>
     <h1>admin</h1>
</template>

<script setup>

const state = useStatevalue()
const newstate = useCounter()

console.log('count')


  let nucleusGet = 'NUCLEUSGET'
  let nucleusPost = 'NUCLEUSPOST'
  const method = 'GET'
  const methods = {
    POST: nucleusPost,
    GET: nucleusGet
  }

  console.log(methods[method],'working');
  console.log('hello');


</script>