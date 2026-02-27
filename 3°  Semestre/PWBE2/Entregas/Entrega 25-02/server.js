require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { listarCarros, cadastrarCarro } = require("./src/controllers/carros.controller");
const { listarClientes, cadastrarCliente } = require("./src/controllers/clientes.controller");
const clienteRouter = require("./src/routes/clientes.routes");
const carroRouter = require ("./src/routes/carros.routes");

const app = express();

app.use(express.json());
app.use(cors());


/* IMPORTAR ROTAS E APLICA-LAS */

app.use(clienteRouter);
app.use(carroRouter);


/* FIM DAS ROTAS */

app.listen(process.env.PORT_APP, () => {
    console.log("Online na porta " + process.env.PORT_APP);
});