// Recupera os dados do localStorage ou inicializa caso não existam
let arquivo = JSON.parse(localStorage.getItem("listagem")) || [];
let arquivoObj = JSON.parse(localStorage.getItem("listagemObj")) || [];

// Salva os valores padronizados no localStorage caso ainda não existam
localStorage.setItem("listagem", JSON.stringify(arquivo));
localStorage.setItem("listagemObj", JSON.stringify(arquivoObj));

// Captura elementos de input
const inputCodigo = document.getElementById("codigo");
const inputQuant = document.getElementById("quant");
const resultadoDiv = document.getElementById("resultado");
const listDiv = document.getElementById("list-div");

// Eventos para navegação no formulário
inputCodigo.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        inputQuant.focus();
    }
});

inputQuant.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        add();
        inputCodigo.focus();
    }
});

// Função para adicionar itens à lista
function add() {
    const codigo = inputCodigo.value.trim();
    const quantidade = inputQuant.value.trim();

    if (codigo && quantidade) {
        arquivo.push(`${codigo};${quantidade}`);
        arquivoObj.push({ Cod_barra: codigo, Quantidade: quantidade });

        // Atualiza o localStorage
        localStorage.setItem("listagem", JSON.stringify(arquivo));
        localStorage.setItem("listagemObj", JSON.stringify(arquivoObj));

        // Limpa os campos e atualiza a listagem
        inputCodigo.value = "";
        inputQuant.value = "";
        listar();
    }
}

// Função para listar os itens
function listar() {
    const lista = JSON.parse(localStorage.getItem("listagem")) || [];
    resultadoDiv.innerHTML = lista.join("<br>");

    listDiv.innerHTML = lista
        .map(
            (item, i) => `
        <div class="input-group pd-3">
            <input type="text" class="form-control" value="${item}" disabled>
            <div class="input-group-append">
                <button class="btn btn-danger" onclick="remove(${i})">Remover</button>
            </div>
        </div>`
        )
        .join("");
}

// Função para remover um item da lista
function remove(index) {
    arquivo.splice(index, 1);
    arquivoObj.splice(index, 1);

    // Atualiza o localStorage
    localStorage.setItem("listagem", JSON.stringify(arquivo));
    localStorage.setItem("listagemObj", JSON.stringify(arquivoObj));

    listar();
}

// Função para zerar a lista
function zerar() {
    arquivo = [];
    arquivoObj = [];

    localStorage.setItem("listagem", JSON.stringify(arquivo));
    localStorage.setItem("listagemObj", JSON.stringify(arquivoObj));

    listar();
}

// Função para exportar os dados para um arquivo .txt
function mensagem() {
  let texto = "";
  let memory = JSON.parse(localStorage.getItem("listagem")) || [];
  memory.forEach(reg => {
      texto += `${reg}\n`; // Correção da concatenação
  });
  console.log(texto.trim()); // Exibe no console sem espaços extras
  let titulo = "Rl - Coletor";
  let blob = new Blob([texto.trim()], { type: "text/plain;charset=utf-8" });
  saveAs(blob, `${titulo}.txt`);
}

// Inicializa a listagem ao carregar a página
listar();
