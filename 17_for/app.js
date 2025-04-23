let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

function calcular() {
    let n = parseInt(document.getElementById("numero").value)

    if (n > 0) {

        div.innerHTML = ''
        for (let i = 0; i <= n; i++) {

            if (i % 2 == 0) {
                div.innerHTML += `<strong class="text-success">${i}</strong> `
            }else{
                div.innerHTML += `<strong class="text-danger">${i}</strong> `
            }

        }


    } else {
        div.innerHTML = `<p class="alert alert-danger">Número inválido</p>`
    }
}

btn.addEventListener('click', calcular)