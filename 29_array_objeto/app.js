let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

let alunos = []  // array

function cadastro(){
    let aluno = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        sexo: document.getElementById('sexo').value,
        curso: document.getElementById('curso').value
    }
    alunos.push(aluno)

    Imprimir()
}

function Imprimir(){
    // console.log(alunos);
    div.innerHTML = ''
    for(let i = 0; i < alunos.length; i++ ){
        div.innerHTML += `
        <p>
            <strong>Nome: </strong> ${alunos[i].nome} 
            <strong>Idade: </strong> ${alunos[i].idade} 
            <strong>Sexo: </strong> ${alunos[i].sexo} 
            <strong>Curso: </strong> ${alunos[i].curso}.
        </p>
        `
    }
}

btn.addEventListener('click', cadastro)