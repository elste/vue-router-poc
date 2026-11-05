<template>
  <div class="page">
    <h2>📊 Dashboard Principale</h2>
    <p>Questa è la vista padre che fa da layout condiviso.</p>

    <div class="dashboard-container">
      <!-- Sotto-menu della dashboard -->
      <aside class="dashboard-nav">
        <!-- Aggiungendo 'exact' evitiamo che rimanga attivo quando visitiamo i figli -->
        <router-link :to="{ name: 'dashboard-home' }"+ >Panoramica</router-link>
        <router-link :to="{ name: 'dashboard-stats' }">Statistiche</router-link>
        <router-link :to="{ name: 'dashboard-settings' }">Impostazioni</router-link>
      </aside>

      <!-- Area dinamica per i componenti figli -->
      <div class="dashboard-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-nav {
  width: 200px;
  background-color: #f8f9fa;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-right: 1px solid #ddd;
}

.dashboard-nav a {
  text-decoration: none;
  color: #2c3e50;
  padding: 8px;
  border-radius: 4px;
}

/* Sostituiamo router-link-active con router-link-exact-active */
.dashboard-nav a.router-link-exact-active {
  background-color: #42b883;
  color: white;
}
</style>
