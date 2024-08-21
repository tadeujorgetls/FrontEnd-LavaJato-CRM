<template>
  <div class="cliente-detalhes box">
    <h1 class="titulo">Detalhes do Cliente</h1>
    <div v-if="cliente" class="detalhes">
      <!-- Exibindo detalhes do cliente -->
      <div class="campo">
        <p class="controle">
          <span class="icon-text">
            <span class="icon is-small">
              <i class="fas fa-user"></i>
            </span>
            <strong>Nome:</strong> {{ cliente.nome }}
          </span>
        </p>
      </div>
      <div class="campo">
        <p class="controle">
          <span class="icon-text">
            <span class="icon is-small">
              <i class="fas fa-phone"></i>
            </span>
            <strong>Telefone:</strong> {{ formatPhone(cliente.telefone) }}
          </span>
        </p>
      </div>
      <div class="campo">
        <p class="controle">
          <span class="icon-text">
            <span class="icon is-small">
              <i class="fas fa-envelope"></i>
            </span>
            <strong>Email:</strong> {{ cliente.email }}
          </span>
        </p>
      </div>
      <div class="campo">
        <p class="controle">
          <span class="icon-text">
            <span class="icon is-small">
              <i class="fas fa-id-card"></i>
            </span>
            <strong>CPF:</strong> {{ cliente.cpf }}
          </span>
        </p>
      </div>
      <div class="campo">
        <p class="controle">
          <span class="icon-text">
            <span class="icon is-small">
              <i class="fas fa-birthday-cake"></i>
            </span>
            <strong>Data de Nascimento:</strong> {{ cliente.dataDeNascimento }}
          </span>
        </p>
      </div>
      <div class="campo">
        <p class="controle">
          <span class="icon-text">
            <span class="icon is-small">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <strong>Endereço:</strong>
            {{ cliente.endereco.logradouro }},
            {{ cliente.endereco.numero }},
            {{ cliente.endereco.complemento }},
            {{ cliente.endereco.bairro }},
            {{ cliente.endereco.uf }},  
            {{ cliente.endereco.cidade }},
            {{ cliente.endereco.cep }}
          </span>
        </p>
      </div>
    </div>

    <!-- Box para Descrição da Lavagem -->
    <div v-if="lavagem" class="box detalhes-lavagem">
      <h2>
        <i class="fas fa-car"></i> Lavagem do Cliente
      </h2>
      <p><strong>Nome:</strong> {{ lavagem.nome }}</p>
      <p><strong>Preço:</strong> R$ {{ lavagem.preco }}</p>
      <p><strong>Tempo:</strong> {{ lavagem.tempo }} minutos</p>
    </div>

    <!-- Botão para redirecionar à página Nova Lavagem -->
    <button class="button is-primary is-fullwidth" @click="novaLavagem">
      <span class="icon">
        <i class="fas fa-redo"></i>
      </span>
      <span>Nova Lavagem</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'ClienteDetalhes',
  setup() {
    const cliente = ref<any>(null);
    const lavagem = ref<any>(null); // Para armazenar os detalhes da lavagem
    const route = useRoute();
    const router = useRouter();

    const formatPhone = (telefone: string) => {
      return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    };

    const fetchCliente = async () => {
      const cpf = route.params.cpf as string;
      try {
        const response = await axios.get(`http://localhost:8082/clientes/${cpf}`);
        cliente.value = response.data;
      } catch (error) {
        console.error('Erro ao buscar cliente:', error);
      }
    };

    const novaLavagem = () => {
      // Redirecionar para a página Nova Lavagem
      router.push({ name: 'NovaLavagem' });
    };

    onMounted(() => {
      fetchCliente();

      // Capturar os detalhes da lavagem da query string
      if (route.query.lavagem) {
        lavagem.value = JSON.parse(route.query.lavagem as string);
      }
    });

    return {
      cliente,
      lavagem,
      novaLavagem,
      formatPhone
    };
  }
});
</script>

<style scoped>
.cliente-detalhes {
  max-width: 600px;
  margin: 20px auto;
  padding: 30px;
  background-color: #2c3e5c;
  border-radius: 8px;
}

.titulo {
  font-size: 2em;
  font-weight: bold;
  color: #ffa491;
  text-align: center;
  margin-bottom: 30px;
}

.campo {
  margin-bottom: 15px;
}

.campo p {
  font-size: 1.2em;
  color: #fff;
}

.icon-text {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.icon {
  color: #ffa491;
}

.button {
  margin-top: 20px;
  background-color: #ffa491;
  border: none;
  color: #2c3e5c;
  font-size: 1.2em;
  font-weight: bold;
}

.button:hover {
  background-color: #ff9277;
}

.detalhes-lavagem {
  margin-top: 20px;
  padding: 15px;
  background-color: #2c3e50;
  color: #ecf0f1;
  border-radius: 5px; 
}

.detalhes-lavagem h2 {
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #ffa491;
}
</style>