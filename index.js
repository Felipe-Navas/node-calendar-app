const express = require('express')
const { dbConnection } = require('./database/config')
require('dotenv').config()

const app = express()

dbConnection()

app.use(express.static('public'))

app.use(express.json())

//TODO: Add routes
app.use('/api/auth', require('./routes/auth'))

//TODO: CRUD

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})
