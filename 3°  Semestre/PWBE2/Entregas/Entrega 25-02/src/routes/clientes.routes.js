const express = require("express");

const router = express.Router();
const ClientesController = require("../controllers/clientes.controller");

router.get("/listar", ClientesController.listarClientes);
router.post("/cliente", ClientesController.cadastrarCliente);


module.exports = router;