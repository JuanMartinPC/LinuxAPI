require('dotenv').config();
const express = require('express');
const linuxRouter = require('./src/linux/linuxRouter')
const app = express()
app.use(express.json())

app.use('/api', linuxRouter)

app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(`Servidor ejecutandose en puerto ${process.env.PORT}`);
})