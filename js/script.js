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
    atualizarTarefas(); // Atualiza a lista de tarefas
    alert(`Tarefa "${titulo}" adicionada com sucesso!`); // Exibe o alert
}

// Função para atualizar a lista de tarefas no DOM usando forEach
function atualizarTarefas(filtrarPendentes = false) {
    listaTarefas.innerHTML = "";

    const tarefasFiltradas = filtrarPendentes ? tarefas.filter(tarefa => !tarefa.concluida) : tarefas;

    tarefasFiltradas.forEach((tarefa) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const botaoConcluir = document.createElement("button");

        span.textContent = tarefa.titulo;
        botaoConcluir.textContent = tarefa.concluida ? "Concluída" : "Concluir";
        botaoConcluir.classList.add("botao-concluir");

        botaoConcluir.addEventListener("click", () => {
            tarefa.concluida = true; // Marca a tarefa como concluída
            atualizarTarefas(); // Atualiza a lista
        });

        li.appendChild(span);
        li.appendChild(botaoConcluir);
        listaTarefas.appendChild(li);
    });
}
