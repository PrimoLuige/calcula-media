const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagem/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./imagem/reprovado.png" alt="emoji decepcionado" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaNota();

});

function adicionaLinha() {
    const inputNomeatividade = document.getElementById('nome-atividade');
    const inputNotaatividade = document.getElementById('nota-atividade');
if (atividade.includes(inputNomeatividade.value)) {
        alert(`A atividade ${inputNomeatividade.value} já foi inserida.`);
} else {atividade.push(inputNomeatividade.value);
        notas.push(parseFloat(inputNotaatividade.value));
    
        let linha = '<tr>';
        linha += '<td>'+inputNomeatividade.value+'</td>';
        linha += '<td>'+inputNotaatividade.value+'</td>';
        linha += `<td>${inputNotaatividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; 
        linha += '</tr>';
        linhas += linha;}    

        

    

    inputNomeatividade.value='';
    inputNotaatividade.value='';
}
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaNota() {
console.log(atividade);
console.log(notas);

const mediaFinal = calculaMedia();
document.getElementById('media-final-valor').innerHTML = mediaFinal;
document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    
    
}

function calculaMedia() {
    let somaDasnotas = 0;

for(let i = 0; i < notas.length; i++){
    somaDasnotas += notas[i];
}
return somaDasnotas / notas.length;
}




