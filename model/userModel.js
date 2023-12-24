const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  cPassword: {
    type: String,
  },
})

const User = new mongoose.model('User', UserSchema)

module.exports = User
