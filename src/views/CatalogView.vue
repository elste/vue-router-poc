<template>
  <div class="page">
    <h2>🛍️ Catalogo Prodotti</h2>

    <!-- Barra di ricerca e filtri -->
    <div class="filters">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Cerca prodotto..."
        @keyup.enter="applicaFiltro"
      />
      <button @click="applicaFiltro">Cerca</button>
      <button @click="resetFiltri" class="btn-reset">Reset</button>
    </div>

    <!-- Stato attuale letto dai query parameters -->
    <p class="status">
      Filtro attivo: <strong>{{ route.query.search || 'Nessuno' }}</strong>
    </p>

    <div class="actions">
      <!-- Navigazione programmatica tramite un pulsante -->
      <button @click="vaiAllaHomeCasuale">Torna alla Home con Azione Programmatica</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Stato locale dell'input di ricerca
const searchQuery = ref(route.query.search || '')

// Sincronizziamo l'input se l'utente cambia pagina con i pulsanti avanti/indietro del browser
watch(() => route.query.search, (newVal) => {
  searchQuery.value = newVal || ''
})

// Funzione per applicare il filtro aggiornando i query parameters
function applicaFiltro() {
  router.push({
    name: 'catalog',
    query: { search: searchQuery.value || undefined } // Rimuove il parametro se vuoto
  })
}

function resetFiltri() {
  searchQuery.value = ''
  router.push({ name: 'catalog' })
}

// Esempio di navigazione programmatica condizionale
function vaiAllaHomeCasuale() {
  // router.push accetta sia un nome rotta che un oggetto percorso
  router.push({ name: 'home' })
}
</script>

<style scoped>
.filters {
  margin: 15px 0;
  display: flex;
  gap: 10px;
}
input {
  padding: 6px;
  font-size: 14px;
}
button {
  padding: 6px 12px;
  cursor: pointer;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
}
.btn-reset {
  background-color: #e74c3c;
}
.status {
  margin-top: 10px;
  font-style: italic;
}
.actions {
  margin-top: 25px;
}
</style>
