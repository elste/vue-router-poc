# 🚀 Vue Router Masterclass PoC

Un Proof of Concept (PoC) completo sviluppato per esplorare tutte le funzionalità di **Vue Router 4** in Vue 3, allineato con i requisiti della certificazione **Certified Mid-Level Vue.js Developer** (certificates.dev) e della documentazione ufficiale.

## 🛠️ Funzionalità Implementate
1. **Setup & Configurazione:** Integrazione pulita con Vite e Vue Router (HTML5 History Mode).
2. **Rotte Dinamiche & Props:** Gestione dei parametri URL (`/users/:id`) disaccoppiati tramite `props: true`.
3. **Navigazione Programmatica & Query Params:** Uso di `useRouter()`, `useRoute()` e gestione dei filtri di ricerca.
4. **Rotte Annidate (Nested Routes):** Struttura a layout multipli con sotto-router per la Dashboard.
5. **Navigation Guards:** Protezione delle rotte tramite `meta` fields e Global Before Guards (`beforeEach`) con simulazione di autenticazione.
6. **Ottimizzazioni & Lazy Loading:** Code splitting asincrono dei componenti, gestione personalizzata dello `scrollBehavior` e pagina di fallback `404 Not Found`.

## 💻 Tecnologie Usate
* Vue 3 (Composition API & `<script setup>`)
* Vue Router 4
* Tailwind CSS
* Vite

## 🚀 Come Eseguire il Progetto

Clona il repository e installa le dipendenze:
\`\`\`bash
git clone https://github.com/tuo-username/vue-router-poc.git
cd vue-router-poc
npm install
\`\`\`

Avvia il server di sviluppo:
\`\`\`bash
npm run dev
\`\`\`
