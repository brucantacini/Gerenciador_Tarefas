//Criando de um array de tarefas inicial
let tarefas = [
    { id: 1, titulo: "Estudar JS", concluida: false }
];

// Selecionando elementos do DOM
const botaoCadastro = document.getElementById("botao-cadastro");
const botaoFiltrar = document.getElementById("botao-filtrar");
const listaTarefas = document.getElementById("lista-tarefas");
const inputTarefa = document.getElementById("idTarefa");


// Função para criar uma nova tarefa com alert
function criarTarefa(titulo, concluida = false) {
    const novaTarefa = {
        id: tarefas.length + 1,
        titulo,
        concluida
    };

    tarefas = [...tarefas, novaTarefa]; // Adiciona a nova tarefa ao array
    renderizarTarefas(); // Atualiza a lista de tarefas
    alert(`Tarefa "${titulo}" adicionada com sucesso!`); // Exibe o alert
}

