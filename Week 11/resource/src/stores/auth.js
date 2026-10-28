import { ref, computed } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  // states
  const user = ref(null) // { username }
  const token = ref(null) // "fake-token"
  const loading = ref(false)
  const error = ref(null)

  // getters
  const isLoggedIn = computed(() => !!token.value)
  // !! convert token.value into a strict boolean, keeping the original token.value result

  // actions
  async function login(username, password) {
    loading.value = true
    error.value = null

    try {
      const userInput = { username, password }
      const response = await axios.post('http://localhost:8000/login', userInput)

      const data = response.data // { token, username }

      token.value = data.token
      user.value = { username: data.username }
    } catch (e) {
      error.value = 'Login failed'
    } finally {
      loading.value = false
    }
  }

  function logout() {
    token.value = null
    user.value = null
  }

  return { user, token, loading, error, isLoggedIn, login, logout }
})