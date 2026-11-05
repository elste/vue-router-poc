<template>
  <div class="page not-found">
    <h2>⚠️ 404 - Pagina Non Trovata</h2>
    <p>Ops! Sembra che l'indirizzo cercato non esista.</p>
    <router-link :to="{ name: 'home' }">Torna alla Home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 40px;
}
.not-found a {
  color: #42b883;
  font-weight: bold;
  text-decoration: none;
}
</style>
