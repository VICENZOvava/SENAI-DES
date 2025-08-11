// Nome, Estado, Fundacao, Diretor, Brasao, Vitorias, Derrotas, Empates

// buscar por nome e exibir o total de pontos 

const usuarios = [
    {
    "nome": "Flamengo",
    "estado": "Maracanã",
    "fundacao": "15 de novembro de 1895",
    "diretor": "Alfredo Almeida",
    "brasao": "https://d1n2lxn29la17.cloudfront.net/2496d2821c43ec4d99614f03c1edc266.jpg",
    "vitorias": "11",
    "derrotas": "2",
    "empates":  "4"
    },
    {
    "nome": "Palmeiras",
    "estado": "Allianz Parque",
    "fundacao": "26 de agosto de 1914",
    "diretor": "Leila Pereira",
    "brasao": "https://www.palmeiras.com.br/wp-content/uploads/2019/08/bandeira.jpg",
    "vitorias": "10",
    "derrotas": "3",
    "empates": "3"
    },
{
    "nome": "Sport Recife",
    "estado": "Estádio Adelmar da Costa Carvalho (Ilha do Retiro)",
    "fundacao": "13 de maio de 1905",
    "diretor": "Yuri Romão",
    "brasao": "https://sportrecife.com.br/wp-content/uploads/2024/06/image14.png",
    "vitorias": "0",
    "derrotas": "10",
    "empates": "6"
}
];

usuarios.forEach((usuario) => {
    if(usuario.nome === "Flamengo" ){
        console.log(((usuario.vitorias) * 3) + (usuario.empates));
    }
});

