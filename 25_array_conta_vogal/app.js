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

    let cont = 0
    for(let i = 0; i < texto.length; i++){

        if(texto[i] == 'a' || texto[i] == "A"){
            cont++
        }else   if(texto[i] == 'e' || texto[i] == "E"){
            cont++
        }else   if(texto[i] == 'i' || texto[i] == "I"){
            cont++
        }else   if(texto[i] == 'o' || texto[i] == "O"){
            cont++
        }else   if(texto[i] == 'u' || texto[i] == "U"){
            cont++
        }
   
    }
    div.innerHTML += "<br>Total de Vogais: " + cont

}
btn.addEventListener('click', calcular)