<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 font-sans">
    <!-- Navbar -->
    <header class="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">

        <!-- Logo / Titolo -->
        <div class="flex items-center gap-2">
          <span class="bg-emerald-500 text-white p-2 rounded-lg font-bold text-sm shadow">🚀 PoC</span>
          <h1 class="text-lg font-bold tracking-tight text-slate-900">Vue Router Masterclass</h1>
        </div>

        <!-- Menu di Navigazione -->
        <nav class="flex flex-wrap items-center gap-2 text-sm font-medium">
          <router-link to="/" class="px-3 py-2 rounded-lg transition hover:bg-slate-100 text-slate-600">Home</router-link>
          <router-link to="/about" class="px-3 py-2 rounded-lg transition hover:bg-slate-100 text-slate-600">Chi Siamo</router-link>
          <router-link to="/catalog" class="px-3 py-2 rounded-lg transition hover:bg-slate-100 text-slate-600">Catalogo</router-link>
          <router-link to="/dashboard" class="px-3 py-2 rounded-lg transition hover:bg-slate-100 text-slate-600">Dashboard</router-link>

          <!-- Auth Button -->
          <div class="ml-2 pl-2 border-l border-slate-200">
            <router-link
              v-if="!authState.isAuthenticated"
              to="/login"
              class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition shadow-sm"
            >
              Login
            </router-link>
            <button
              v-else
              @click="eseguiLogout"
              class="bg-rose-500 hover:bg-rose-600 text-white px-3 py-2 rounded-lg transition shadow-sm text-xs font-semibold flex items-center gap-1"
            >
              Logout ({{ authState.user }})
            </button>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-5xl mx-auto px-4 py-8">
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import { authState } from './auth.js'
import { useRouter } from 'vue-router'

const router = useRouter()

function eseguiLogout() {
  authState.logout()
  router.push({ name: 'home' })
}
</script>

<style>
/* Sfruttiamo le classi attive native di Vue Router sovrascrivendo lo stile dei link attivi */
nav a.router-link-exact-active {
  background-color: #ecfdf5 !important;
  color: #059669 !important;
  font-weight: 600;
}
</style>
