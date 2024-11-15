<script setup>

import { ref } from 'vue';
import { productos } from './main';
import { createApp } from 'vue';


const buscador = ref("Buscar")

console.log(productos);
import { provide } from 'vue'

provide(/* key */ 'productos', /* value */ productos)
</script>

<template>
  <div id="app">
    <header>
      <div class="centrado" id="c2">
        <div class="centrado">
          <form action="">
            <input type="text" v-model="buscador">
            <button><i class='bx bx-search-alt-2'></i></button>
          </form>
        </div>

        <div id="logo" class="centrado">
          <img src="/src/assets/logo.png" alt="logo">
        </div>

        <div class="centrado" id="ingreso">
          <div>
            <router-link to="/"><span>CREAR CUENTA</span></router-link>

            <router-link to="/"><span>INGRESAR</span></router-link>
          </div>
        </div>
      </div>
      <div>
        <nav class="centrado">
          <router-link to="/home"><span>INICIO</span></router-link>
          <router-link to="/home"><span>NOSOTROS</span></router-link>
          <router-link to="/products" ><span>PRODUCTOS</span></router-link>
          <router-link to="/home"><span>POLITICA DE DEVOLUCION</span></router-link>

        </nav>
      </div>
    </header>
    <main>

      <RouterView ></RouterView>

    </main>
    <footer></footer>
  </div>
</template>

<style scoped>
#c2 {
  justify-content: space-around;
  font-size: 15px;
  margin-bottom: 1%;
}

span  {
  border-bottom: 1px black solid;
}

.centrado div {
  width: 40%;
}

#logo {
  width: 40%;
}

.bx {
  background-color: none !important;
}

input {
  border: none;
  border-bottom: black 1px solid;
  width: 130px;
}

button {
  border-bottom: black 1px solid;
}

img {
  width: 45%;
}

#ingreso a {
  font-size: 11px;
  color: rgb(67, 67, 67) !important;
}

a:hover {
  color: rgb(168, 168, 168);
}

a:checked {
  color: rgb(168, 168, 168);
}
</style>
