import axios from 'axios';

const API_URL = 'http://localhost:8082/clientes';

export default {
    criarCliente(cliente: any) {
        return axios.post(API_URL, cliente);
    }
}