<template>
    <div class="cliente-detalhes">
      <div v-if="cliente">
        <h1 class="titulo">{{ cliente.nome }}</h1>
        <p>Telefone: {{ cliente.telefone }}</p>
        <p>Data de Nascimento: {{ cliente.nascimento }}</p>
        <p>Endereço: {{ cliente.logradouro }}, {{ cliente.bairro }}, {{ cliente.numero }}</p>
        <p>CEP: {{ cliente.cep }}</p>
        <p>Email: {{ cliente.email }}</p>
        <p>CPF: {{ cliente.cpf }}</p>
  
        <button @click="novaLavagem" class="button is-primary">Nova Lavagem</button>
  
        <h2 class="titulo">Lavagens Passadas</h2>
        <ul>
          <li v-for="lavagem in lavagens" :key="lavagem.id">
            <p>Data: {{ lavagem.data }}</p>
            <p>Descrição: {{ lavagem.descricao }}</p>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Erro ao carregar os detalhes do cliente.</p>
      </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useRoute } from 'vue-router'
  
  export default defineComponent({
  name: 'ClienteDetalhes',
  setup() {
    const route = useRoute()
    const cliente = ref<any>(null)

    try {
      cliente.value = JSON.parse(route.params.cliente as string)
    } catch (error) {
      console.error('Erro ao parsear cliente:', error)
      cliente.value = null
    }

    const lavagens = ref([
      { id: 1, data: '2023-07-21', descricao: 'Lavagem completa' },
      { id: 2, data: '2023-08-15', descricao: 'Lavagem simples' }
    ])

    const novaLavagem = () => {
      // Lógica para registrar uma nova lavagem
      console.log('Nova Lavagem')
    }

    return {
      cliente,
      lavagens,
      novaLavagem
    }
  }
  })
</script>
  
<style scoped>
  .cliente-detalhes {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #ffa491;
    padding: 10px;
    box-sizing: border-box;
  }
  .logo {
    font-size: 1.5em;
    font-weight: bold;
    color: white;
  }
  .menu-button {
    border: none;
    background: transparent;
    color: white;
    font-size: 1.5em;
  }
  .informacoes-cliente {
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
  }
  .titulo {
    margin-bottom: 20px;
  }
  .button {
    margin-top: 20px;
    padding: 10px 15px;
    font-size: 1em;
    background-color: #ffa491;
  }
  .relatorio-lavagens {
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    background: #f5f5f5;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
  }
</style>