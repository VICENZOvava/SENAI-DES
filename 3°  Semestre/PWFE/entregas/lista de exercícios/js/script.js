function reajustar(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;
    
    if(salario > 2000){
        bonus = salario * 0.10;
    }   

    let salarioFinal = salario + bonus;

    resultado.innerHTML = 
    `seu bonus é de R$ ${bonus.toFixed(2)} <br>salario Final R$ ${salarioFinal.toFixed(2)}`;
}

document.getElementById('salario').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        reajustar();
    }
});

function reajustar2(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let frete = 0;
    
    if(valor < 150){
        frete = + 20;
    }else(valor >= 150)

    let valorFinal = valor + frete;

    resultado.innerHTML = 
    `seu frete é de R$ ${frete.toFixed(2)} <br> o valor da compra é R$ ${valorFinal.toFixed(2)}`;
}

document.getElementById('valor').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        reajustar2();
    }
});

function reajustar3(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;
    
    if(valor >= 200){
        desconto = valor * ( 0.05 );
    }else(valor < 200)

    let valorFinal = valor - desconto;
    
    resultado.innerHTML = 
    `seu desconto é de R$ ${desconto.toFixed(2)} <br> o valor final do combustivel é R$ ${valorFinal.toFixed(2)}`;
}

document.getElementById('valor').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        reajustar3();
    }
});

function reajustar4(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;
    
    if(valor >= 100){
        taxa = valor * ( 0.10 );
    }else(valor < 100)

    let valorFinal = valor + taxa;
    
    resultado.innerHTML = 
    `sua taxa é de R$ ${taxa.toFixed(2)} <br> o valor final do serviço é R$ ${valorFinal.toFixed(2)}`;
}

document.getElementById('valor').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        reajustar4();
    }
});

function reajustar5(){
    let valor = Number(document.getElementById('valor').value);
    let dias = Number(document.getElementById('dias').value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;
    
    if(dias > 0){
        taxa = valor * 0.02;
    }

    let valorFinal = valor + taxa;
    
    resultado.innerHTML = 
    `Sua multa é de R$ ${taxa.toFixed(2)} <br> 
     O valor final é R$ ${valorFinal.toFixed(2)}`;
}

document.getElementById('valor').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        reajustar5();
    }
});



function reajustar6(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;
    
    if(valor >= 300){
        cashback = valor * ( 0.05 );
    }else(valor < 300)

    let valorFinal = valor - cashback;
    
    resultado.innerHTML = 
    `seu cashback é de R$ ${cashback.toFixed(2)} <br> o valor final da compra é R$ ${valorFinal.toFixed(2)}`;
}

document.getElementById('valor').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        reajustar6();
    }
});
