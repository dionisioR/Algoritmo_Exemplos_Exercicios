
let state = {
    btn: document.getElementById('btn'),
    div: document.getElementById('resultado'),
    nome_input: document.getElementById('nome'),
    idade_input: document.getElementById('idade'),
    email_input: document.getElementById('email'),
    estado_input: document.getElementById('estado'),
}


let pessoas = []  // array

function cadastro() {

    let pessoa = {
        nome: state.nome_input.value,
        idade: state.idade_input.value,
        email: state.email_input.value,
        estado: state.estado_input.value
    }
    pessoas.push(pessoa)
    console.log(pessoas);
    Imprimir()
}

function Imprimir() {

    let qtd_sp = 0;
    let qtd_rj = 0;
    let qtd_mg = 0;

    state.div.innerHTML = ''

    for (let i = 0; i < pessoas.length; i++) {
        state.div.innerHTML += `
        
        <div class="col-6">
            <p class=" alert alert-primary">
                <strong>Nome: </strong> ${pessoas[i].nome} <br/>
                <strong>Idade: </strong> ${pessoas[i].idade} <br/>
                <strong>E-mail: </strong> ${pessoas[i].email} <br/>
                <strong>Estado: </strong> ${pessoas[i].estado} <br/>
            </p>
        </div>`

        if(pessoas[i].estado == "SP"){
            qtd_sp++
        }else if(pessoas[i].estado == "RJ"){
            qtd_rj++
        }else{
            qtd_mg++
        }

        if(pessoas.length % 2==0){
            state.btn.classList.add('btn-success')
            state.btn.classList.remove('btn-danger')
            state.btn.classList.remove('btn-primary')

        }else{
            state.btn.classList.remove('btn-success')
            state.btn.classList.add('btn-danger')
        }
        
    }

    state.div.innerHTML += `
        <div class="col-6">
            <p class=" alert alert-info">
                  <strong>Total de Registros: </strong> ${pessoas.length} <br/>
                  <strong>SP: </strong> ${qtd_sp} | 
                  <strong>RJ: </strong> ${qtd_rj} | 
                  <strong>MG: </strong> ${qtd_mg}
            </p>
        </div>
     `

    limpar()
}

function limpar() {

}

state.btn.addEventListener('click', cadastro)