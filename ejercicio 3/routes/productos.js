var express = require("express");
var router = express.Router();

/* GET Productos listing. */
router.get("/", function (req, res, next) {
  const productos = [
    { codigo: 1, nombre: 'Cerveza Corona', precio:100000 },
    { codigo: 2, nombre: 'Papas Fritas', precio:100000 },
    { codigo: 3, nombre: 'Ramitas', precio:100000 },
    { codigo: 3, nombre: 'Queso', precio:100000 },
    { codigo: 4, nombre: 'Jamón', precio:100000 },
  ];
  const title = "Productos";
  res.render('productos', { title, productos });
});

module.exports = router;
