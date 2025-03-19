let div = document.getElementById('resultado')
let btn = document.getElementById('btn')

// console.log(div ,btn);
function mostrarValores(){
    // código
    let nome = document.getElementById('nome').value;
    
    div.innerHTML = nome
}

btn.addEventListener('click',mostrarValores)