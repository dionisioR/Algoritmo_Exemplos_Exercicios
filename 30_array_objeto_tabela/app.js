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

        if(alunos[i].sexo == "M"){
            div.innerHTML += `
            <tr>
                <td class="text-primary">${alunos[i].nome}</td>
                <td class="text-primary">${alunos[i].idade}</td>
                <td class="text-primary">${alunos[i].sexo}</td>
                <td class="text-primary">${alunos[i].curso}</td>
            </tr>
            `
        }else{
            div.innerHTML += `
            <tr>
                <td class="text-danger">${alunos[i].nome}</td>
                <td class="text-danger">${alunos[i].idade}</td>
                <td class="text-danger">${alunos[i].sexo}</td>
                <td class="text-danger">${alunos[i].curso}</td>
            </tr>
            `
        }

       
    }
}

btn.addEventListener('click', cadastro)