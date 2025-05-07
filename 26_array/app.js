/*
para cada interação do usuário o número deve ser armazenado em um array
mostra os números armazenado no array
quantidade de par/ímpar.
*/

let btn = document.getElementById('btn')
let div_array = document.getElementById('resultado')
let div_quantidade = document.getElementById('quantidade')

let numeros = []

// let cont_par = 0 // cont_par++
// let cont_impar=0 // cont_impar++
function escrever() {

    let num = document.getElementById('numero').value
    numeros.push(num)

    // console.log(numeros);
    // numeros[0]
    // numeros[1]
    // numeros[2]

    // numeros.length -> tamanho do array
    div_array.innerHTML = ''
    for (let i = 0; i < numeros.length; i++) {

        if (i % 2 == 0) {
            div_array.innerHTML += '<span class="btn btn-dark mx-2">' + numeros[i] + '</pan>   '
        } else {
            div_array.innerHTML += '<span class="btn btn-primary mx-2">' + numeros[i] + '</pan>   '

        }
    }

    // contador
    let cont_par = 0 // cont_par++
    let cont_impar=0 // cont_impar++

    for (let i = 0; i < numeros.length; i++) {

        // verifica se o valor é par
        if(numeros[i] % 2 == 0){
            cont_par++
        }else{
            cont_impar++
        }
    }

    div_quantidade.innerHTML = `
        <span  class="btn btn-success me-3 mt-5">Par: ${cont_par}</span>
        <span class="btn btn-danger mt-5">Ímpar : ${cont_impar}</span>
    
    `



    limpar()
}

function limpar() {
    document.getElementById('numero').value = ''
    document.getElementById('numero').focus()
}

btn.addEventListener('click', escrever)