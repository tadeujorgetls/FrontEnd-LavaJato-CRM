<template>
  <div class="home">
    <div class="cpf-section">
      <h1 class="title">Cliente</h1>
      <div class="form">
        <input class="input" type="text" placeholder="Insira o CPF" v-model="cpf" @keyup="handleCPF" required />
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
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { validarCPF } from '../utils';

export default defineComponent({
  name: 'Home-Main',
  setup() {
    const cpf = ref('');
    const cpfError = ref('');

    const checkCPF = async () => {
      const cleanedCPF = cpf.value.replace(/[^\d]+/g, '');
      if (validarCPF(cleanedCPF)) {
        cpfError.value = '';
        try {
          const response = await axios.get(`http://localhost:8082/clientes/${cleanedCPF}`);
          const cliente = response.data;
          window.location.href = `/clientes/${cliente.cpf}`;
        } catch (error) {
          cpfError.value = 'Cliente não encontrado';
        }
      } else {
        cpfError.value = 'CPF inválido';
      }
    };

    const handleCPF = (event: KeyboardEvent) => {
      const input = event.target as HTMLInputElement;
      input.value = input.value.replace(/\D/g, '').slice(0, 11); // Limitar a 11 dígitos
    };

    return {
      cpf,
      cpfError,
      checkCPF,
      handleCPF,
    };
  },
});
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.cpf-section {
  text-align: center;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}

.form {
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
  background-color: #ffa491;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>