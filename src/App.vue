<template>
  <div id="app">
    <div class="main">
      <div class="sidebar">
        <BarraLateral />
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
  },
});
</script>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';

#app {
  display: flex;
  height: 100vh;
  background-color: #181826; /* Preto */
}

.main {
  display: flex;
  width: 100%;
}

.sidebar {
  width: 250px;
}

.content {
  flex-grow: 1;
  padding: 20px;
  background-color: #181826; /* Preto */
}
</style>