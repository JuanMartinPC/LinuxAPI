require('dotenv').config();
const express = require('express');
const app = express()


app.get('/', (req, res) => {
    res.send('Hola')
})

app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(`Servidor ejecutandose en puerto ${process.env.PORT}`);
})