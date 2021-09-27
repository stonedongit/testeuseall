function mediaSimples(n1 = 0, n2 = 0, n3 = 0) {
    return (n1 + n2 + n3) / 3;
}

function mediaVariavel(n =  Array){
    if (typeof n != 'object'){ // Só irá verificar caso o valor seja passado como um array, ex.: [10, 20, 30, ...]
        return;
    }

    var media = n.length,
        soma = 0;

    n.forEach(function(e){
        soma += e;
    });

    return soma / media;
}

mediaSimples(50, 100, 500);
mediaVariavel([50, 100, 500, 1000]);