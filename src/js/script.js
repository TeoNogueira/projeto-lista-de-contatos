const form = document.getElementById('form-atividade');
// const imgAprovado = '<img src="../images/aprovado.png" alt="celebrando" />';
// const imgReprovado = '<img src="../images/reprovado.png" alt="triste" />';
const myEmojiA = `<p style="font-size: 30px;">&#129395;</p>`
const myEmojiB = `<p style="font-size: 30px;">&#128532;</p>`

const atividades = [];
const notas = []

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'


const notaMinima = parseFloat(prompt('Digite a nota mínima:'))

let linhas = '';


form.addEventListener('submit', function(e) {
e.preventDefault();



adicionaLinha()
atualizaTabela()
atualizaMediaFinal()

})


const adicionaLinha = () => {

    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNota = document.getElementById('nota-atividade')

if(atividades.includes(inputNomeAtividade.value)) {

    alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
}
 else {

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNota.value));

    let linha = '<tr>'

    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNota.value}</td>`
    linha += `<td>${inputNota.value >= notaMinima ? myEmojiA : myEmojiB}</td>`
    linha += '</tr>'

    linhas += linha

}


inputNomeAtividade.value = ''
inputNota.value = ''

}


function atualizaTabela() {

    
const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas



}


function atualizaMediaFinal() {
    
    const mediaFinal = calculaMedia();

    document.getElementById('media-final-valor')
    .innerHTML = mediaFinal.toFixed(2)

    document.getElementById('media-final-resultado')
    .innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}


function calculaMedia() {

 
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++) {

        somaDasNotas += notas[i];

    }

    return somaDasNotas / notas.length

}