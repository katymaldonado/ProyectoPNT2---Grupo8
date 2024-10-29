<script setup>
import Navegador from './components/elements/Navegador.vue';
</script>

<template>
  <div id="app">
    <header>
      <Navegador></Navegador>
    </header>
    <main>

      <RouterView></RouterView>

    </main>
    <footer></footer>
  </div>
</template>

<style scoped></style>
