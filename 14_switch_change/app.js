let select = document.getElementById('dia')
let div = document.getElementById('resultado')

function diaDaSemana() {

    let dia = document.getElementById('dia').value
    // console.log(dia);

    if (dia == -1) {
        div.innerHTML = '<p>Escolha um dia</p>'
    } else {
        switch (dia) {
            case '0':
                div.innerHTML = '<p>Domingo</p>'
                break;
            case '1':
                div.innerHTML = '<p>Segunda</p>'
                break;
            case '2':
                div.innerHTML = '<p>Terça</p>'
                break;
            case '3':
                div.innerHTML = '<p>Quarta</p>'
                break;
            case '4':
                div.innerHTML = '<p>Quinta</p>'
                break;
            case '5':
                div.innerHTML = '<p>Sexta</p>'
                break;
            case '6':
                div.innerHTML = '<p>Sábado</p>'
                break;

            default:
                div.innerHTML = '<p>Opss!!!!</p>'
                break;
        }
    }

}

select.addEventListener('change', diaDaSemana)