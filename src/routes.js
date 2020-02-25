const { Router } = require("express");
const SearchItens = require("./controllers/SeachItensController");

const routes = Router();

routes.post("/search", SearchItens.index);

module.exports = routes;
