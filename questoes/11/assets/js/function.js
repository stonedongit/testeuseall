var cedulas = [100, 50, 20, 10],
    saque,
    mensagemCedulas = '';

    saque = parseInt(prompt('Qual o valor desejado do saque?\nNotas disponíveis: R$ 10,00, R$ 20,00, R$ 50,00 e R$ 100,00'));

    if (saque % 10 > 0){
        alert('Não foi possível realizar o saque. Consulte o valor informado.')
    }
    
    for(i = 0; i < cedulas.length; i++){
        if( saque >= cedulas[i] ){
            mensagemCedulas += parseInt(saque/cedulas[i]) + (parseInt(saque/cedulas[i]) > 1 ? " notas de " + cedulas[i] : " nota de " + cedulas[i])  + "\n";
            saque = saque % cedulas[i];
        }
    }

    saque = alert('Saque aprovado. Confirme as cédulas: \n'+mensagemCedulas )