let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

function calcular(){
    let n = parseInt(document.getElementById("numero").value)
    
    if(n > 0){

        div.innerHTML = ''
        for (let i = 0; i<= n; i++) {
            div.innerHTML += `${i} `
        }


    }else{
        div.innerHTML = `<p class="alert alert-danger">Número inválido</p>`
    }
}

btn.addEventListener('click', calcular)