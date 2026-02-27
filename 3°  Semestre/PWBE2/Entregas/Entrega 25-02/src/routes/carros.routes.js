const express = require("express");

const carroRouter = express.Router();
const CarrosControllers = require("../controllers/carros.controller");

carroRouter.get("/listarcarros", CarrosControllers.listarCarros);
carroRouter.post("/carros", CarrosControllers.cadastrarCarro);

module.exports = carroRouter;