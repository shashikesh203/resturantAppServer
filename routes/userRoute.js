const express = require('express')
const router = express.Router()
const {
  userSignUp,
  getUserData,
  userLogin,
} = require('../controller/userController')

router.post('/sign-up', userSignUp)
router.post('/log-in', userLogin)
router.post('/get-user-info', getUserData)

module.exports = router
