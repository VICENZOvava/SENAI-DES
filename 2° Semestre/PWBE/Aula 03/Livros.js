const Livros = [
{
    "nome": "Livrinho6",
    "autor": "Reenye Lima",
    "Nº de paginas": "300",
    "genero": "comedia",
    "protagonista": "Reenye"

},
{
    "nome": "Livrinho3",
    "autor": "Robson",
    "Nº de paginas": "150",
    "genero": "comedia",
    "protagonista": "Robson"

},
{
    "nome": "Livrinho1",
    "autor": "Ze",
    "Nº de paginas": "40",
    "genero": "comedia",
    "protagonista": "Zezin"

},
]
function localizarLivroPorTitulo(titulo) {
    let encontrado = null;
    Livros.forEach(livro => {
        if (livro.nome === titulo) {
            encontrado = livro;
        }
    });
    return encontrado;
}

console.log(localizarLivroPorTitulo("Livrinho1"))

Livros.forEach((livro, i)=>{
    if(livro.nome === "Livrinho3"){
        Livros.splice(i,2);
    }
    i++;
});
console.log(Livros);




    