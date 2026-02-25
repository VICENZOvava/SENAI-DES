const express = require("express");

const router = express.Router();
const CarrosControllers = require("../controllers/carros.controller");

router.get("/listar", CarrosController.listarCarros);


module.exports = router;