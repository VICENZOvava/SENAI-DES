// // const numeros = [1, 2, 3, 4, 5];

// // for (let i = 0; i < numeros.length; i++) {
// //    console.log("[" + i + "] ->" + numeros[i]); }
  

// function soma(a, b){
// return a + b;
// }

// // console.log ( soma (2, 3) );
// soma(5, 5); 

// var soma = (a, b) => {
//     console.log (a + b);
// }

// console.log soma (8, 2);
// console.log soma (7, 30);

const numeros = [1, 2, 3, 4, 5];
const marcas = ["adidos", "nake", "bombardiro"];
const usuarios = [
    {
    "nome": "Fulano",
    "sobrenome": "da silva",
    "matricula": "1234",
    "telefone": "(12) 1234-4321"
    },
    {
        "nome": "Beltrano",
        "sobrenome": "png",
        "matricula": "4567",
        "telefone": "(32) 4567-7894"
    }
];

// function imprime(value) {
//     console.log ("Value =" + value);
// }

// numeros.forEach(imprime);
// marcas.forEach(imprime);

marcas.forEach((value) => {
  if (value === "nake") {
    console.log("escontrei");
  }
//   console.log("Value - " + value);
} );

usuarios.forEach((usuario) => {
    if(usuario.matricula === "4567" ){
        console.log(usuario.nome + " " + usuario.sobrenome);
       console.log(usuario.telefone);
    }
});

// const carro = {
//     "ano": 2000,
//     "cor": "vermelho",
//     "modelo":"Uno",
//     "marca": "Fiat",
//     "escada": true,
//     "placa": "abc1234"
// }

// console.log(carro);


