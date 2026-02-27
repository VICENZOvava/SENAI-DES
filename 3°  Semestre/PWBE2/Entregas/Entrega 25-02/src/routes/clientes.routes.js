const express = require("express");

const clienteRouter = express.Router();
const ClientesController = require("../controllers/clientes.controller");

clienteRouter.get("/listar", ClientesController.listarClientes);
clienteRouter.post("/cliente", ClientesController.cadastrarCliente);


module.exports = clienteRouter;