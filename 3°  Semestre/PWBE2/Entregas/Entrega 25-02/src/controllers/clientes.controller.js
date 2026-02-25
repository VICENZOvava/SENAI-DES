const prisma = require("../data/prisma");

const listarClientes = async (req, res) => {
    try {
        const lista = await prisma.Cliente.findMany();

        res.json(lista).status(200).end();
    } catch (err) {
        res.json(err).status(500).end();
    }
};

const cadastrarCliente = async (req, res) => {
        const dados = req.body;

        let nome = dados.nome;
        let partesNome = nome.split(" ");

        if(partesNome.lenght < 2)

             res.status(400).json({ message: "Colocar nome e sobrenome" })
    

        let digitosCpf = dados.cpf;
        if(digitosCpf.length !== 11)
           res.status(400).json({ message: "CPF deve conter 11 caracteres" })
        else if(digitosCpf)
        

        let Email = dados.email
        if(Email.toLowerCase = )


        let CNH = dados.cnh
        
       


    const novoCliente = await prisma.cliente.create({
            data: dados
         });

         res.json(novoCliente).status(201).end();
    
};



module.exports = {
    listarClientes,
    cadastrarCliente
}