<template>
<div class="page long-page">
  <h2>ℹ️ Chi Siamo (Pagina Lunga per Test Scroll)</h2>
  <p>Questa pagina serve a testare il comportamento dello scroll.</p>

  <!-- Generiamo molti blocchi per allungare la pagina -->
  <div v-for="n in 20" :key="n" class="block">
    Blocco di contenuto n. {{ n }}
  </div>
</div>
</template>

<style scoped>
.long-page {
  padding: 20px;
}
.block {
  height: 100px;
  margin: 15px 0;
  background-color: #f0f2f5;
  border-left: 4px solid #42b883;
  display: flex;
  align-items: center;
  padding-left: 15px;
  font-weight: bold;
  color: #333;
}
</style>
