import { reactive } from 'vue'

// Stato reattivo globale condiviso nell'app
export const authState = reactive({
  isAuthenticated: false,
  user: null,
  login(username) {
    this.isAuthenticated = true
    this.user = username
  },
  logout() {
    this.isAuthenticated = false
    this.user = null
  }
})
