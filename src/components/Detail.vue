<template>
    <div>
        <h1>Detalle del Producto</h1>
        <h3>id: {{productoId}}</h3>
    </div>
</template>

<script>
export default {
    computed: {
        productoId() {
            return this.$route.params.id
        }
    }
}
</script>

<style lang="scss" scoped></style>