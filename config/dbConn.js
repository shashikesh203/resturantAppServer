const mongoose = require('mongoose')

const dbConn = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected to database')
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbConn
