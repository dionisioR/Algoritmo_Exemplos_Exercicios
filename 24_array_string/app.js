let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

function calcular(){

    let texto = document.getElementById('texto').value
    console.log(typeof texto);
    console.log(texto[0]);
    console.log(texto.length);

    div.innerHTML = ''

    console.log(texto.length-1);
    for(let i = 0; i < texto.length; i++){

        if(i == texto.length -1 ){
            div.innerHTML += `
            ${texto[i]}
        `
        }else{
        div.innerHTML += `
            ${texto[i]} -
        `
        }
    }

}
btn.addEventListener('click', calcular)