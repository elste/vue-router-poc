<template>
  <div class="page">
    <h2>🔐 Pagina di Login</h2>
    <p>Questa è un'area protetta. Per accedere alla Dashboard devi effettuare il login.</p>

    <div class="login-box">
      <button @click="eseguiLogin">Simula Login come Admin</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { authState } from '../auth.js'

const router = useRouter()
const route = useRoute()

function eseguiLogin() {
  authState.login('Mario Rossi')

  // Se c'è un parametro 'redirect', rimandiamo l'utente alla pagina richiesta originariamente
  const redirectPath = route.query.redirect || { name: 'dashboard' }
  router.push(redirectPath)
}
</script>

<style scoped>
.login-box {
  margin-top: 20px;
}
button {
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
</style>
