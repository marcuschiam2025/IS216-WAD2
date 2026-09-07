<script setup>

import { useRouter } from "vue-router"
const router = useRouter()

function logout() {
   // logout logic

   router.push("/Example1");
}

</script>

<template>
  <button @click="logout">Log Out?</button>
</template>