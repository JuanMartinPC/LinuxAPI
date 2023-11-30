require('dotenv').config();
const cors = require('cors');
const express = require('express');
const linuxRouter = require('./src/linux/linuxRouter')
const usersRouter = require('./src/users/usersRouter')
const app = express()

app.use(cors());
app.use(express.json())

app.use('/api', linuxRouter)
app.use('/users', usersRouter)

app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(`Servidor ejecutandose en puerto ${process.env.PORT}`);
})

