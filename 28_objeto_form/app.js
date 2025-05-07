let btn = document.getElementById('btn')
let div = document.getElementById('resultado')


function cadastrar(){

    // let nome_form = document.getElementById('nome').value
    // let idade_form = document.getElementById('idade').value
    // let sexo_form = document.getElementById('sexo').value
    // let curso_form = document.getElementById('curso').value

    // console.log(nome, idade, sexo, curso);

    // let aluno = {
    //     nome: nome_form,
    //     idade:idade_form,
    //     sexo:sexo_form,
    //     curso:curso_form
    // }
    let aluno = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        sexo:document.getElementById('sexo').value,
        curso:document.getElementById('curso').value
    }

    div.innerHTML = `
        <p class="alert alert-success">
            <strong>Nome: </strong> ${aluno.nome}.
            <strong>Idade: </strong> ${aluno.idade}.
            <strong>Sexo: </strong> ${aluno.sexo}.
            <strong>Curso: </strong> ${aluno.curso}.
        </p>
    `

    

}
btn.addEventListener('click',cadastrar)