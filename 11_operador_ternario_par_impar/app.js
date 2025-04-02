let div = document.getElementById('resultado')
let btn = document.getElementById('btn')

function parImpar(){

    let numero = parseInt(document.getElementById("numero").value)
    // console.log(numero, typeof numero);
    div.innerHTML = (numero % 2 == 0) ? "PAR" : "ÍMPAR"

    document.getElementById('teste').innerHTML = (numero % 2 == 0) ? "PAR" : "ÍMPAR"
    

}

btn.addEventListener('click', parImpar)