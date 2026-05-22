const produtos = [
    { nome: "carrinho", preco: 15.0 },
    { nome: "bicicleta", preco: 199.99 },
    { nome: "computador", preco: 1000.00 }
];

console.log(produtos.filter(produto => produto.preco > 50));
