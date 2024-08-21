<template>
  <div class="nova-lavagem box">
    <h1 class="titulo">Selecionar Lavagem</h1>

    <!-- Formulário de Seleção de Lavagem -->
    <div class="campo">
      <label class="label">Tipo de Lavagem</label>
      <div class="controle">
        <div class="select is-fullwidth">
          <select v-model="selectedLavagem" @change="atualizarDetalhesLavagem">
            <option value="" disabled>Escolha uma lavagem</option>
            <option value="simples">Lavagem Simples</option>
            <option value="completa">Lavagem Completa</option>
            <option value="completaPolimento">Lavagem Completa + Polimento</option>
            <option value="motor">Lavagem do Motor</option>
            <option value="higienizacao">Higienização Interna</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Detalhes da Lavagem Selecionada -->
    <div v-if="lavagemDetalhes" class="detalhes-lavagem">
      <p><strong>Tempo de Lavagem:</strong> {{ lavagemDetalhes.tempo }}</p>
      <p><strong>Preço:</strong> R${{ lavagemDetalhes.preco }}</p>
    </div>

    <!-- Botão Finalizar -->
    <button class="button is-primary is-fullwidth" @click="finalizarLavagem" :disabled="!lavagemDetalhes">
      <span class="icon">
        <i class="fas fa-check"></i>
      </span>
      <span>Finalizar Lavagem</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLavagem: '', // Controle da lavagem selecionada
      lavagemDetalhes: null // Detalhes da lavagem selecionada
    };
  },
  methods: {
    // Atualiza os detalhes da lavagem com base na seleção
    atualizarDetalhesLavagem() {
      const opcoesLavagem = {
        simples: { tempo: '1:00 Hora', preco: 50 },
        completa: { tempo: '2:00 Horas', preco: 100 },
        completaPolimento: { tempo: '3:00 Horas', preco: 250 },
        motor: { tempo: '2:00 Horas', preco: 100 },
        higienizacao: { tempo: '2:00 Horas', preco: 200 }
      };

      this.lavagemDetalhes = opcoesLavagem[this.selectedLavagem] || null;
    },
    // Redireciona para a página Home após finalizar
    finalizarLavagem() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>

<style scoped>
.nova-lavagem {
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

.campo label {
  font-size: 1.2em;
  color: #ffa491;
}

.select {
  width: 100%;
}

.detalhes-lavagem {
  margin-top: 20px;
  font-size: 1.2em;
  color: #fff;
}

.detalhes-lavagem p {
  margin-bottom: 10px;
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

.button .icon {
  margin-right: 10px;
}
</style>