const express = require('express')
const dbConn = require('./config/dbConn')
const dotenv = require('dotenv').config()
const route = require('./routes/userRoute')
var cors = require('cors')
const errorHandler = require('./middleware/errorHandler')

dbConn()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', route)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT)
})
