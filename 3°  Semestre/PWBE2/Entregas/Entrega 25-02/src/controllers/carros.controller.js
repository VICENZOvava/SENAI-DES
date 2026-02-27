const prisma = require("../data/prisma");

const listarCarros = async (req, res) => {
    try{
        const lista = await prisma.Carros.findMany();
        
        res.json(lista).status(200).end();
    }catch(err){
        res.json(err).status(500).end();
    }

};

const cadastrarCarro = async (req, res) => {
    
    const dados = req.body;

    let placa = dados.placa;

    if(!placa || placa.trim() === "")
        return res.status(400).json({ message: "Placa obrigatoria"})

    placa = placa.trim();

    if (placa.includes(" "))
        return res.status(400).json({message: "Placa nao pode conter espacos"})

    placa = placa.replace(/\s/g, "");
 
        if (placa.length !== 7)
        return res.status(400).json({ message: "Placa deve ter 7 caracteres" })
    else if (placa.length === 7)
        dados.placa = placa.toUpperCase();


        let marca = dados.marca;
    let modelo = dados.modelo;

    if (!marca || marca.trim() === "")
        return res.status(400).json({ message: "Marca obrigatória" })

    if (!modelo || modelo.trim() === "")
        return res.status(400).json({ message: "Modelo obrigatório" })

    marca = marca.trim();
    modelo = modelo.trim();

    let partesMarca = marca.split(" ");
    let partesModelo = modelo.split(" ");

    marca = partesMarca.map(p => 
        p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()
    ).join(" ");

    modelo = partesModelo.map(p => 
        p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()
    ).join(" ");

    dados.marca = marca;
    dados.modelo = modelo;

      let ano = String(dados.ano);

    if (ano.length !== 4)
        return res.status(400).json({ message: "Ano deve ter 4 digitos" })

    let caracteresAno = ano.split("");
    let contemLetra = caracteresAno.some(c => isNaN(c));

    if (contemLetra)
        return res.status(400).json({ message: "Ano não pode conter letras" })

    

        const carros = await prisma.carros.findMany();

    let placaDuplicada = carros.some(
        carro => carro.placa.toUpperCase() === dados.placa.toUpperCase()
    );

    if (placaDuplicada)
        return res.status(400).json({ message: "Placa ja cadastrada" })





        const novoCarro = await prisma.carros.create({
        data: dados
    });
     
     res.json(novoCarro).status(201).end();

}

module.exports = {
    listarCarros,
    cadastrarCarro
}