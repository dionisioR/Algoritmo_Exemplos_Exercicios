
let state = {
    btn: document.getElementById('btn'),
    div: document.getElementById('resultado'),
    n1_input: document.getElementById('n1'),
    n2_input: document.getElementById('n2'),
}



function cadastro() {

    let numero_01 = parseInt(state.n1_input.value)
    let numero_02 = parseInt(state.n2_input.value)
    console.log(numero_01, numero_02);
    console.log('--------------------');

    if (numero_01 > numero_02) {
        let aux = numero_01
        numero_01 = numero_02
        numero_02 = aux
    }
    console.log(numero_01, numero_02);
    let soma = 0
    state.div.innerHTML = ''
    for(let i = numero_01 + 1; i < numero_02; i++){

        if(i % 2 == 0){
            soma += i
        }

    }
      state.div.innerHTML = "Valor Total: "  +  soma
}


state.btn.addEventListener('click', cadastro)