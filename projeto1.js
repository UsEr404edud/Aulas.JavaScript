/*
Imagine que você abriu uma loja:
1) Crie o nome de 8 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/

const produtos = [ "Arroz", "Feijão", "Macarrão", "Leite", "Café", "Açúcar", "Óleo", "Farinha"]
const precos = [
 20, 9, 7, 6, 15, 5, 8, 4 ]

function mostrarEstoque(){   
    let contador = 0
    console.log("Estoque da Loja")
    while(contador < produtos.length){
        console.log(produtos[contador] + " - R$ " + precos[contador])
        contador = contador + 1
    }
}

function adicionarProduto( nome,  preco){
    produtos.push(nome)
    precos.push(preco)
    console.log("Produto adicionado!")
}

// 5) Função para remover produto pelo índice
function removerProduto(indice){
    produtos.splice(indice, 1)
    precos.splice(indice, 1)
    
    console.log("Produto removido!")
}


// 6) EXECUÇÃO NA ORDEM PEDIDA

// mostra estoque
mostrarEstoque()

// adiciona produto
adicionarProduto("Chocolate", 10)

// mostra estoque
mostrarEstoque()

// remove um elemento pelo índice
removerProduto(2)

// mostrar estoque
mostrarEstoque()