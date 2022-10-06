let arquivo = [];

if(arquivo !== [] ){
       arquivo = JSON.parse(localStorage.getItem('listagem'));
}

const inputEle = document.getElementById('codigo');
inputEle.addEventListener('keyup', function(cod)
{
 console.log(cod)
  if (cod.key === "Enter") { 
      document.getElementById('quant').focus();
      }
});

const inputqnt= document.getElementById('quant');
inputqnt.addEventListener('keyup', function(qnt)
{
 console.log(qnt)
  if (qnt.key === "Enter") { 
      add();
           document.getElementById('codigo').focus();
  }
});

function add(){

    codigo.value;
quant.value;
arquivo.push(`${codigo.value};${quant.value}`)
console.log(arquivo)
codigo.value = '';
quant.value = '';
localStorage.setItem('listagem', JSON.stringify(arquivo)); 
listar();

}

function listar(){

    let lista = JSON.parse(localStorage.getItem('listagem'))
    console.log(typeof lista)
    console.log(lista)
    resultado.innerHTML = '';
    for(let id=0; id <arquivo.length; id++ ){
    document.getElementById('resultado').innerHTML += `${lista[id]}<br>`
    
}
}

function zerar(){
    let zerando = [];
    localStorage.setItem('listagem', JSON.stringify(zerando)); 
    arquivo = zerando;
}



