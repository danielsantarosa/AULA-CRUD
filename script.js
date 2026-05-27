function obterClientes() {
    return JSON.parse(localStorage.getItem('clientes')) || [];
}
