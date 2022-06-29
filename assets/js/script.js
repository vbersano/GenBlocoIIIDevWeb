/*

acesso por tag: getElementByTagName()
acesso por Id: getElementById()
acesso por Nome: getElementByName()
acesso por Classe: getElementsByClassName()
acesso por Seletor: querySelector()

*/

//acessando elemento que tem o id 'nome'
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#gmap')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome () {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'

    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOK = true
    }

}

function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf ('@') == -1 || email.value.indexOf ('.') == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'

    } else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }

}

function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Mucho texto'
        txtAssunto.style.color = 'red'
    } else {
        assuntoOk = true
    }

}

function enviar () {
    if (nomeOK == true && emailOk == true && assuntoOk == true) {
        alert('Formulario enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente!')
    }
}

function mapaZoomOut () {
    gmap.document.width = '200px'
    gmap.document.height = '200px'
}

function mapaZoomIn () {

    gmap.document.width = '800px'
    gmap.document.height = '800px'

}