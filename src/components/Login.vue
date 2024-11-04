<template>
    <div class="container">
        <div class="login-box">

            <form  class="login-box">
                <input type="text" placeholder="Teléfono, usuario o correo electrónico" required v-model="username" />
                <input type="password" placeholder="Contraseña" required v-model="password" />

                <button type="submit" @click.prevent="login">Iniciar sesión</button>
            </form>
            <p v-if="inlogin">Usuario o contraseña incorrectos</p>
            <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const username = ref(null);
const password = ref(null);
const inlogin = ref(false);
const login = () => {
    if (username.value === "admin" && password.value === "admin") {
        router.push("/home");
    }else{
        inlogin.value=true;
    }
};
</script>
<style lang="scss" scoped>
.login-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}

input {
    margin: 2%;
}

p{
    color: red;
}
</style>