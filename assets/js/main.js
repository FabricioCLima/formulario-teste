let cxNome = document.querySelector('#nome');
let cxIdade = document.querySelector('#idade');
let cxPeso = document.querySelector('#peso');
let cxAltura = document.querySelector('#altura');

let btnEnviar = document.querySelector('#btnEnviar');

let dados = document.getElementsByClassName('pessoa');

let res = document.getElementById('resultado');


btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    let nome = cxNome.value;
    let idade = cxIdade.value;
    let peso = cxPeso.value;
    let altura = cxAltura.value;

    let imc = (peso / (altura * altura)).toFixed(1);

    let pessoa = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        imc: imc
    }

    dados[1].textContent = pessoa.nome 
    dados[2].textContent = pessoa.idade +' Anos'
    dados[3].textContent = pessoa.peso +' Kg'
    dados[4].textContent = pessoa.altura +' m'
    dados[5].textContent = pessoa.imc + ' - ' + situacaoDoPeso(imc)


    res.style.display = 'block'

})

function fecharJanela(){
    res.style.display = 'none'

    cxNome.value = ''
    cxIdade.value = ''
    cxPeso.value = ''
    cxAltura.value = ''
}




function situacaoDoPeso(imc){
    let situacao = ''

    if(imc < 18.5){
        situacao = 'Abaixo do peso'
    }else if(imc >= 18.5 && imc <= 24.9){
        situacao = 'Peso normal'
    }else if(imc >= 25 && imc <= 29.9){
        situacao = 'Sobrepeso'
    }else if(imc >= 30 && imc <= 34.9){
        situacao = 'Obesidade grau I'
    }else if(imc >= 35 && imc <= 39.9){
        situacao = 'Obesidade grau II'
    }else if(imc >= 40){
        situacao = 'Obesidade grau III'
    }else {
        situacao = 'Peso inválido, informe seu peso corretamente!!'
    }

    return situacao
}