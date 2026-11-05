<template>
  <div class="page">
    <h2>👤 Profilo Utente</h2>
    <p>Stai visualizzando il profilo dell'utente con ID: <strong>{{ id }}</strong></p>

    <div class="actions">
      <!-- Navigazione usando il nome della rotta anziché l'URL hardcodato -->
      <router-link :to="{ name: 'dashboard' }">Torna alla Dashboard</router-link>
    </div>
  </div>
</template>

<script setup>
// Riceviamo il parametro :id direttamente come prop grazie a props: true nel router
defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.page {
  padding: 10px 0;
}
.actions {
  margin-top: 15px;
}
</style>
