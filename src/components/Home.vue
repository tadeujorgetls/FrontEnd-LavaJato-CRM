<template>
  <div class="home">
    <div class="cpf-sessao">
      <h1 class="titulo">Cliente</h1>
      <div class="formulario">
        <input class="input" type="text" placeholder="Insira o CPF" v-model="cpf" v-mask="'###.###.###-##'" masked="true" />
        <button class="button is-primary" @click="checkCPF">
          <span class="icon"><i class="fas fa-check"></i></span>
          <span>Check</span>
        </button>
      </div>
      <p v-if="cpfError" class="error">{{ cpfError }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { validarCPF } from '../utils'
//import { maska } from 'vue-the-mask'

export default defineComponent({
  name: 'Home-Main',
  //directives: { maska },
  setup() {
    const cpf = ref('')
    const cpfError = ref('')

    const checkCPF = () => {
      const cleanedCPF = cpf.value.replace(/[^\d]+/g, '')
      if (validarCPF(cleanedCPF)) {
        cpfError.value = ''
        console.log('CPF válido:', cleanedCPF)
      } else {
        cpfError.value = 'CPF inválido'
      }
    }

    return {
      cpf,
      cpfError,
      checkCPF
    }
  }
})
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.cpf-sessao {
  text-align: center;
}
.titulo {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}
.formulario {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input {
  margin-right: 10px;
  padding: 10px;
  font-size: 1em;
}
.button {
  padding: 10px 15px;
  font-size: 1em;
  display: flex;
  align-items: center;
  background-color: #ffa491;
}
.button .icon {
  margin-right: 5px;
}
</style>
