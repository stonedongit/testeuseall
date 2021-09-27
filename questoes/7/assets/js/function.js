document.getElementById('imc').onsubmit = function(event){
    var altura = document.getElementById('altura').value,
        peso = document.getElementById('peso').value,
        imc = peso / (altura * altura),
        resultado = document.getElementById('resultado');
        
        if (imc > 25) {
            resultado.value = 'Acima do peso.';
        } else if (imc <=25 && imc >= 18 ) {
            resultado.value = 'Peso normal.';
        } else {
           resultado.value = 'Abaixo do peso.';
        }
        
    event.preventDefault(); // Impedir que o submit recarregue a página.
};