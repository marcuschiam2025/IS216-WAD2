<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();

const username = ref("student");
const password = ref("1234");

async function submit() {
  await auth.login(username.value, password.value);
  if (auth.isLoggedIn) {
    // route.query.redirect direct back to the original page where the user came from
    router.push(route.query.redirect || "/products");
  }
}
</script>

<template>
  <div style="padding:16px; max-width:420px;">
    <h2>Login</h2>

    <div class="login-fields">
      <label>
        Username
        <input v-model.trim="username" />
      </label>

      <label>
        Password
        <input type="password" v-model="password" />
      </label>

      <button :disabled="auth.loading" @click="submit">
        {{ auth.loading ? "Logging in..." : "Login" }}
      </button>

      <p v-if="auth.error" style="color:#b00020;">{{ auth.error }}</p>
    </div>
  </div>
</template>

<style scoped>
.login-fields {
  display:flex; 
  flex-direction:column; 
  gap:10px;
}
</style>