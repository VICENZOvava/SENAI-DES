const prisma = require("../data/prisma");

const listarCarros = async (req, res) => {
    try{
        const lista = await prisma.Carros.findMany();
        
        res.json(lista).status(200).end();
    }catch(err){
        res.json(err).status(500).end();
    }

};

const cadastrarCarros = async (req, res) => {
    
}

module.exports = {
    listarCarros,
    cadastrarCarros
}