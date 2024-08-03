<template>
  <div id="app">
    <BarraLateral />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './components/BarraLateral.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral
  }
})
</script>

<style>
@import '@fortawesome/fontawesome-free/css/all.css';

#app {
  display: flex;
  height: 100vh;
}

.main {
  flex-grow: 1;
  padding: 20px;
}
</style>
