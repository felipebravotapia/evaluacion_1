var express = require("express");
var router = express.Router();

/* GET Paises listing. */
router.get("/", function (req, res, next) {
  const paises = [
    { pais: 'Chile', poblacion: 17000000 },
    { pais: 'Perú', poblacion: 1200000 },
    { pais: 'Colombia', poblacion: 1200000 },
    { pais: 'Argentina', poblacion: 1200000 },
    { pais: 'Venezuela', poblacion: 1200000 },
  ];
  const title = "Países con su cantidad de Población";
  res.render("paises", { title, paises });
});

module.exports = router;
