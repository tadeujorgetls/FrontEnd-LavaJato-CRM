<template>
  <div class="barra-lateral">
    <div class="logo">Minha Marca</div>
    <nav>
      <router-link to="/" class="button is-light">
        <span class="icon"><i class="fas fa-home"></i></span>
        <span>Home</span>
      </router-link>
      <router-link to="/novo-cliente" class="button is-light">
        <span class="icon"><i class="fas fa-user-plus"></i></span>
        <span>Novo Cliente</span>
      </router-link>
      <a class="button is-light">
        <span class="icon"><i class="fas fa-file-alt"></i></span>
        <span>Relatório de Lavagens</span>
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BarraLateral'
})
</script>

<style scoped>  
.barra-lateral {
  width: 250px;
  height: 100vh;
  background-color: #ffa491;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}
nav {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.button {
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
}
</style>
