let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

function calcular() {
    let n = parseInt(document.getElementById("numero").value)

    if (n > 0) {

        div.innerHTML = ''
        for (let i = 0; i <= n; i++) {

            if (i % 2 == 0) {
                div.innerHTML += `<div class="col-1 alert alert-success">${i}</div> `
            }else{
                div.innerHTML += `<div class="col-1 alert alert-danger">${i}</div> `
            }

        }


    } else {
        div.innerHTML = `<p class="alert alert-danger">Número inválido</p>`
    }
}

btn.addEventListener('click', calcular)