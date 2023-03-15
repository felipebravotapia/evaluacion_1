const express = require("express");
const router = express.Router();

/* GET Clientes listing. */
router.get("/", function (req, res, next) {
  const clientes = [
    { rut: '1-1', nombre: 'Felipe', apepat:'Bravo', apemat:'Tapia', edad:32 },
    { rut: '1-2', nombre: 'Karin', apepat:'Hernandez', apemat:'Gonzalez', edad:32 },
    { rut: '1-3', nombre: 'Isidora', apepat:'Bravo', apemat:'Hernandez', edad:6 },
    { rut: '1-K', nombre: 'Enrique', apepat:'Bravo', apemat:'Vargas', edad:79 },
    { rut: '1-9', nombre: 'Nelly', apepat:'Tapia', apemat:'Rodriguez', edad:69 },

  ];
  const title = "Listado Clientes";
  res.render('clientes', { title, clientes });
});

module.exports = router;
