const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let users = [];

app.post('/usuarios', (req, res) => {
  const { nombre, correo, edad } = req.body;
  if (!nombre || !correo || !edad) {
    return res.status(400).send('Nombre, correo y edad son obligatorios.');
  }
  if (!/\S+@\S+\.\S+/.test(correo)) {
    return res.status(400).send('Correo no válido.');
  }
  if (edad <= 0) {
    return res.status(400).send('Edad debe ser un número positivo.');
  }
  users.push({ nombre, correo, edad });
  res.status(201).send('Usuario registrado.');
});

app.get('/usuarios', (req, res) => {
  res.json(users);
});

const port = 3000;
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
