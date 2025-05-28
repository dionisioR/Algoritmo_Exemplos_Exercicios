let state = {
    btn: document.getElementById('btn'),
    div: document.getElementById('resultado'),
    nome_input: document.getElementById('nome'),
    idade_input: document.getElementById('idade'),
    sexo_input: document.getElementById('sexo'),
    curso_input: document.getElementById('curso'),
}


let alunos = []  // array

function cadastro() {
    let aluno = {
        nome: state.nome_input.value,
        idade: state.idade_input.value,
        sexo: state.sexo_input.value,
        curso: state.curso_input.value
    }
    alunos.push(aluno)

    Imprimir()
}

function Imprimir() {
    // console.log(alunos);
    state.div.innerHTML = ''
    for (let i = 0; i < alunos.length; i++) {
        state.div.innerHTML += `
        <p>
            <strong>Nome: </strong> ${alunos[i].nome} 
            <strong>Idade: </strong> ${alunos[i].idade} 
            <strong>Sexo: </strong> ${alunos[i].sexo} 
            <strong>Curso: </strong> ${alunos[i].curso}.
        </p>
        `
    }
    limpar()
}

function limpar() {
    state.nome_input.value = ''
    state.idade_input.value = ''
    state.nome_input.focus()
}

state.btn.addEventListener('click', cadastro)