    // Exercício 31: Comprando Livros
    // Peça ao usuário para inserir o preço de um livro.
    // Calcule o valor total da compra com
    // desconto de 10%.

    let btn = document.getElementById('btn');
    let div = document.getElementById('resultado')

    function calcularDesconto(){

        //-----------------------------------------------
        let valorLivro = parseFloat(document.getElementById('preco').value)
        // console.log(typeof valorLivro);
        let desconto = valorLivro * 0.10
        // console.log(desconto);
        let valorComDesconto = valorLivro - desconto
        // console.log(valorComDesconto);
        div.innerHTML = `
            O valor do livro é  R$ ${valorLivro.toFixed(2)} e o valor do livro com desconto é R$ ${valorComDesconto.toFixed(2)}
        `
        //-----------------------------------------------
    
    }

    btn.addEventListener('click', calcularDesconto);