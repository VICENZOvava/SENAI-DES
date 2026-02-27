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

    if (!nome || nome.trim() === "")
        return res.status(400).json({ message: "Nome obrigatorio" })

    nome = nome.trim();
    let partesNome = nome.split(" ").filter(p => p !== "");

    if (partesNome.length < 2)
        return res.status(400).json({ message: "colocar nome e sobrenome" })
    
    let digitosCpf = dados.cpf.replace(/\D/g, "");

    if (digitosCpf.length !== 11)
        return res.status(400).json({ message: "CPF deve conter 11 caracteres" })
    else if (digitosCpf.length === 11)
        dados.cpf = digitosCpf;
        
        let Email = dados.email;

    if (!Email || !Email.includes("@") || !Email.includes("."))
        return res.status(400).json({ message: "Email invlido" })
    else if (Email.includes("@") && Email.includes("."))
        dados.email = Email.toLowerCase();

     const clientes = await prisma.cliente.findMany();
    let emailDuplicado = clientes.some(cliente => cliente.email === dados.email);

    if (emailDuplicado)
        return res.status(400).json({ message: "Email cadastrado" })

    
     let CNH = dados.cnh;

    if (!CNH)
        return res.status(400).json({ message: "CNH obrigatória" })

    let caracteresCNH = CNH.split("");
    let primeiroCaractere = caracteresCNH[0];

    if (isNaN(primeiroCaractere))
        return res.status(400).json({ message: "CNH deve começar com numero" })

    
        
       


    const novoCliente = await prisma.cliente.create({
            data: dados
         });

         res.json(novoCliente).status(201).end();
    
};



module.exports = {
    listarClientes,
    cadastrarCliente
}