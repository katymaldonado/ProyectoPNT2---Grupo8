<template>
    <div class="centrado c2">
        <div class="centrado">
            <form action="">
                <input type="text">
                <button><i class='bx bx-search-alt-2'></i></button>
            </form>
        </div>

        <div id="logo" class="centrado">
            <img src="/src/assets/logo.png" alt="logo">
        </div>

        <div class="centrado">
            <div>
                <router-link to="/">Ingresar</router-link>
            </div>
        </div>
    </div>
    <div>
        <nav class="centrado">
            <router-link to="/home">Inicio</router-link>
            <router-link to="/Products">Productos</router-link>

        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.c2 {
    justify-content: space-around;
}

.centrado div {
    width: 30%;
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
</style>