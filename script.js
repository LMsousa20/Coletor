let arquivo = [];

const inputEle = document.getElementById('codigo');
inputEle.addEventListener('keyup', function (cod) {
    console.log(cod)
    if (cod.key === "Enter") {
        document.getElementById('quant').focus();
    }
});

const inputqnt = document.getElementById('quant');
inputqnt.addEventListener('keyup', function (qnt) {
    console.log(qnt)
    if (qnt.key === "Enter") {
        add();
        document.getElementById('codigo').focus();
    }
});

function add() {

    codigo.value;
    quant.value;
    arquivo.push(`${codigo.value};${quant.value}`)
    console.log(arquivo)
    codigo.value = '';
    quant.value = '';
    localStorage.setItem('listagem', JSON.stringify(arquivo));
    listar();

}

function listar() {

    let lista = JSON.parse(localStorage.getItem('listagem'))
    console.log(typeof lista)
    console.log(lista)
    resultado.innerHTML = '';
    document.getElementById('list-div').innerHTML = '';
    for (let id = 0; id < lista.length; id++) {
        document.getElementById('resultado').innerHTML += `
        <span>${lista[id]}</span><br>
`;

    }
    lista.forEach((listItem, i) => {
        document.getElementById('list-div').innerHTML += `
        <div class="input-group pd-3 ">
        <input type="number" class="form-control" placeholder="${listItem}" disabled id="1">
        <div class="input-group-append">
            <button class="btn btn-danger" onclick="remove('${listItem}')">remove</button>

        </div>
    </div>`;
    });


}

function remove(item) {
    let lista = JSON.parse(localStorage.getItem('listagem'))
    var myIndex = lista.indexOf(item);
    if (myIndex !== -1) {
        lista.splice(myIndex, 1);
    }
    console.log(lista)
    localStorage.setItem('listagem', JSON.stringify(lista));
    listar()
}

function zerar() {
    let zerando = [];
    localStorage.setItem('listagem', JSON.stringify(zerando));
    arquivo = zerando;
    listar();
}




