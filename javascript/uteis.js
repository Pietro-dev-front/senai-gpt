function demoFilter () {
    const numeros = [ 1,2,3,4,5,6]

    let numerosFiltrados = numeros.filter(numero => numero != 2);

    console.log(numerosFiltrados)

}

function demoFind () {
    let produtos = [

        { 
            id: "1",
            nome : "Teclado",
            preco: 100
        },
        { 
            id: "2",
            nome : "Mouse",
            preco: 50
        },
        { 
            id: "3",
            nome : "Monitor",
            preco: 700
        },
    ];

    const produtoCaro = produtos.find(produtos => produtos.preco == 700);

    console.log(produtoCaro)
}

function demoMap () {
    const numeros = [1,2,3,4,5]

    const numerosDobrados = numeros.map(numeros => numeros.map * 2)

    console.log(numerosDobrados)

}