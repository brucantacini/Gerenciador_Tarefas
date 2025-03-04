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

    tarefas = [...tarefas, novaTarefa]; 
    atualizarTarefas(); 
    alert(`Tarefa "${titulo}" adicionada com sucesso!`); 
}

// Adicionando evento ao botão "Cadastrar"
botaoCadastro.addEventListener("click", () => {
    const titulo = inputTarefa.value.trim();

    if (titulo === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }
    criarTarefa(titulo); 
    inputTarefa.value = "";
});

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
            tarefa.concluida = true; 
            atualizarTarefas(); 
        });

        li.appendChild(span);
        li.appendChild(botaoConcluir);
        listaTarefas.appendChild(li);
    });
}

// Adicionando evento ao botão "Filtrar Pendentes"
botaoFiltrar.addEventListener("click", () => {
    atualizarTarefas(true); 
});

// Usando map para criar uma nova lista com os títulos em maiúsculas
const tarefasMaiusculas = tarefas.map(tarefa => tarefa.titulo.toUpperCase());
console.log("Tarefas em Maiúsculas:", tarefasMaiusculas);

// Usando reduce para calcular o total de tarefas concluídas
const totalConcluidas = tarefas.reduce((contador, tarefa) => {
    return tarefa.concluida ? contador + 1 : contador;
}, 0);
alert(`Total de tarefas concluídas: ${totalConcluidas}`);

// Usando destructuring para extrair título e concluída de uma tarefa específica
const tarefaExemplo = tarefas[0];
const { titulo, concluida } = tarefaExemplo;
alert(`Título: ${titulo}, Concluída: ${concluida ? "Sim" : "Não"}`);

// Atualizar tarefas iniciais ao carregar a página
atualizarTarefas();






