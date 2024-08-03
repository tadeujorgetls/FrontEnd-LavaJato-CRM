<template>
  <div class="novo-cliente">
    <div class="header">
      <div class="logo">Minha Marca</div>
      <button class="button is-white menu-button">
        <span class="icon">
          <i class="fas fa-bars"></i>
        </span>
      </button>
    </div>
    <div class="form-cliente">
      <h1 class="titulo">Novo Cliente</h1>
      <form @submit.prevent="submitForm">
        <div class="campo">
          <label class="label">Nome do Cliente</label>
          <div class="control">
            <input class="input" type="text" v-model="nome" required>
          </div>
        </div>
        <div class="campo">
          <label class="label">Número de Telefone</label>
          <div class="control">
            <input class="input" type="tel" v-model="telefone" maxlength="15" @keyup="handlePhone" required>
          </div>
        </div>
        <div class="campo">
          <label class="label">Data de Nascimento</label>
          <div class="control">
            <input class="input" type="date" v-model="nascimento" required>
          </div>
        </div>
        <div class="campo">
          <label class="label">Endereço</label>
          <div class="control">
            <input class="input" type="text" placeholder="Logradouro" v-model="logradouro" required>
            <input class="input" type="text" placeholder="Bairro" v-model="bairro" required>
            <input class="input" type="text" placeholder="Número da Casa" v-model="numero" required>
            <input class="input" type="text" placeholder="UF" v-model="uf" required>
            <input class="input" type="text" placeholder="Cidade" v-model="cidade" required>
            <input class="input" type="text" placeholder="CEP" v-model="cep" @keyup="handleCEP" required>
          </div>
        </div>
        <div class="campo">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" v-model="email" required>
          </div>
        </div>
        <div class="campo">
          <label class="label">CPF</label>
          <div class="control">
            <input class="input" type="text" v-model="cpf" @keyup="handleCPF" @blur="validateCPF" required>
          </div>
          <p v-if="cpfError" class="error">{{ cpfError }}</p>
        </div>
        <div class="control">
          <button class="button is-primary" type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { validarCPF } from '../utils'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'NovoCliente',
  setup() {
    const router = useRouter()
    const nome = ref('')
    const telefone = ref('')
    const nascimento = ref('')
    const logradouro = ref('')
    const bairro = ref('')
    const numero = ref('')
    const uf = ref('')
    const cidade = ref('')
    const cep = ref('')
    const email = ref('')
    const cpf = ref('')
    const cpfError = ref('')

    const validateCPF = () => {
      if (validarCPF(cpf.value)) {
        cpfError.value = ''
      } else {
        cpfError.value = 'CPF inválido'
      }
    }

    const handlePhone = (event: KeyboardEvent) => {
      const input = event.target as HTMLInputElement
      input.value = input.value.replace(/\D/g, '')
                              .replace(/^(\d{2})(\d)/g, '($1) $2')
                              .replace(/(\d)(\d{4})$/, '$1-$2')
    }

    const handleCEP = (event: KeyboardEvent) => {
      const input = event.target as HTMLInputElement
      input.value = input.value.replace(/\D/g, '')
                              .replace(/^(\d{5})(\d)/, '$1-$2')
    }

    const handleCPF = (event: KeyboardEvent) => {
      const input = event.target as HTMLInputElement
      input.value = input.value.replace(/\D/g, '')
                              .replace(/^(\d{3})(\d)/g, '$1.$2')
                              .replace(/(\d{3})(\d)/, '$1.$2')
                              .replace(/(\d{3})(\d{2})$/, '$1-$2')
    }

    const submitForm = () => {
      validateCPF()
      if (cpfError.value === '') {
        const cliente = {
          nome: nome.value,
          telefone: telefone.value,
          nascimento: nascimento.value,
          logradouro: logradouro.value,
          bairro: bairro.value,
          numero: numero.value,
          uf: uf.value,
          cidade: cidade.value,
          cep: cep.value,
          email: email.value,
          cpf: cpf.value
        }
        console.log('Formulário enviado', cliente)
        try {
          const clienteStr = JSON.stringify(cliente)
          router.push({ name: 'ClienteDetalhes', params: { cliente: clienteStr } })
        } catch (error) {
          console.error('Erro ao converter cliente para JSON:', error)
        }
      }
    }

    return {
      nome,
      telefone,
      handlePhone,
      nascimento,
      logradouro,
      bairro,
      numero,
      uf,
      cidade,
      cep,
      handleCEP,
      email,
      cpf,
      handleCPF,
      cpfError,
      validateCPF,
      submitForm
    }
  }
})
</script>

<style scoped>
.novo-cliente {
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
.form-cliente {
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
}
.titulo {
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  color: white;
}
.campo {
  margin-bottom: 15px;
}
.input {
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1em;
  width: 100%;
}
.button {
  padding: 10px 15px;
  font-size: 1em;
  background-color: #ffa491;
}
.error {
  color: red;
  font-size: 0.9em;
}
</style>
