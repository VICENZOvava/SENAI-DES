// Exercicio 1 
var nome = "Vicenzo Vieira Varandas";

console.log("Ola, !", nome);

console.log("-----------");


// Exercicio 2

var a = 20;
var b = 20;

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);

console.log("-----------");
// Exercicio 3
var altura = 5;
var largura = 10;

var resultado = altura*largura;

console.log ("A area do retangulo é : ", resultado);

console.log("-----------");
// Exercico 4
var nascimento = 2000;
var idade = 2025 - nascimento;

console.log(idade);
if (idade >= 18) {
    console.log("Voce e maior de idade");
}else {
console.log ("Nao e de maior");
}

console.log("-----------");
// Exercicio 5

var numero = 6

console.log(numero);
if (numero % 2 == 0) {
    console.log("Voce e par");
} else {
    console.log("Voce e impar");
}

console.log("-----------");
// Exercicio 6
 var n1 = 9;
 var n2 = 9;
 var n3 = 8;
 var SOMA = n1 + n2 + n3 
 var M = SOMA / 3

 if (M => 8 ) {
    console.log("A");
} else if ( M => 6 || M < 8) {
    console.log("B");
 } else if ( M => 4 || M <=5 )  {
    console.log("C");
  } else {
    console.lo ("REPROVADO");
  }

console.log("-----------");
// Exercicio 7

for (let i = 1; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("-----------");
// Exercicio 8

var i = 0;
var fat = 1;

for(i = 8; i > 0; i--){
    fat = fat * i;
    console.log(fat);
}
console.log("-----------");

// Exercicio 9
for (let i = 1; i <= 1000; i += 3) {
    console.log(i);
}