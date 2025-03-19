let div = document.getElementById('resultado')
let btn = document.getElementById('btn')

function calcular(){

    let raio = parseFloat(
        document.getElementById('raio').value
    )
    // console.log(typeof raio, raio);

    let area = 4 * Math.PI * Math.pow(raio,2)
    let volume = (4 * Math.PI * Math.pow(raio, 3) )/3

    div.innerHTML = `
        Esfera com raio de ${raio}. <br>
        Volume da esfera: ${volume.toFixed(3)}. <br>
        Área da esfera: ${area.toFixed(3)}.
    `

}

btn.addEventListener('click', calcular)