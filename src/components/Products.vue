<template>
     <h1>Productos</h1>
    <div class="centrado">
        <div class="filtros">
            filtros
        </div>
        <div class="centrado c2">
            <div v-for="producto in productos" :key="producto.id" class="producto-card centrado">
               <div class="producto-imagen"> <img :src="producto.imagen_url" :alt="producto.nombre"  /></div>
                <h3>{{ producto.nombre }}</h3>
                <p>Precio: ${{ producto.precio }}</p>
                <button>Comprar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const productos = inject('productos')
 
console.log(productos);


</script>

<style lang="scss" scoped>
.c2{
    justify-content: space-between;
    flex-wrap: wrap;
    width: 70vw !important;
    padding: 2%;
}
.filtros{
    width: 25vw !important;
    border: 1px solid black ;
}

</style>