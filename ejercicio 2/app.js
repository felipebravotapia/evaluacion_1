const express = require("express");
const app = express();

async function main() {
  try {
    const PORT = 9000;

    app.get('/usuarios', function (req, res) {
      res.send('Listado de Usuarios');
    });

    app.get('/clientes', function (req, res) {
      res.send('Listado de Clientes');
    });

    app.post('/usuario', function (req, res) {
      res.send('Datos de Usuario');
    });

    app.post('/cliente', function (req, res) {
      res.send('Datos de Cliente');
    });


    app.listen(PORT, ()=>{
      console.log(`Levanta en PUERTO: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();