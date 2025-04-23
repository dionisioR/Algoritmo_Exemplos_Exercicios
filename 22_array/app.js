let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

let nomes = []

function cadastro(){

    let nome_frm = document.getElementById('nome').value
    console.log(nome_frm);
    // inserir 
    nomes.push(nome_frm) // insert no array
    console.table(nomes);

    div.innerHTML = ''
    for(let i = 0; i < nomes.length ;i++){
        div.innerHTML += `<p> <strong>Nome: </strong> ${nomes[i]} </p>`
    }
}

btn.addEventListener('click', cadastro)