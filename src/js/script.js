const form = document.getElementById('form-contato');

const myEmojiA = `<p style="font-size: 30px;">&#128212;</p>`

 


const nomes = [];
const numero = []


const valorCampoContato = document.getElementById('numero-contato')

let linhas = '';


form.addEventListener('submit', function(e) {
e.preventDefault();

adicionaLinha()
atualizaTabela()


})




const adicionaLinha = () => {

    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

if(nomes.includes(inputNomeContato.value)) {

    alert(`O contato ${inputNomeContato.value} já foi inserido`)
}
else if (numero.includes(inputNumeroContato.value)) {
    alert(`O número ${inputNumeroContato.value} já foi inserido`)

} else {

    nomes.push(inputNomeContato.value);
    numero.push(inputNumeroContato.value);

    let linha = '<tr>'

    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNumeroContato.value}</td>`
    linha += `<td>${inputNumeroContato.value >= 1 ? myEmojiA : 'Campo do número inválido'}</td>`
    linha += '</tr>'

    linhas += linha

}


inputNomeContato.value = ''
inputNumeroContato.value = ''

}


function atualizaTabela() {

    
const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas



}
