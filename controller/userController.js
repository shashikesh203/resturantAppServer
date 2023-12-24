const User = require('../model/userModel')


const getUserData = async (req, res) => {
  console.log(req.body)
  const resultdata = await User.find({ email: req.body.email })
  console.log(resultdata)
  if (resultdata.length > 0) {
    res.statusCode(200)
  } else {
    return res.json({
      data: null,
      message: 'No user found with this mail !',
      success: false,
    })
    
  }
}

const userSignUp = async (req, res) => {
  const { name, email, password, cPassword } = req.body

  const resultdata = await User.find({ email: email })

  if (resultdata.length > 0) {
    return res.json({
      data: null,
      message: 'Email already exists',
      success: false,
    })
  }

  // if (password != cPassword) {
  //   return res.json({
  //     data: null,
  //     message: "password do'nt match",
  //     success: false,
  //   })
  // }

  const data = await new User({
    name,
    email,
    password,
  }).save()

  res.json({
    data: 2 + 2,
    message: 'The user has registered successfully',
    success: true,
  })
}

const userLogin = async (req, res ,next) => {
  const { email, password } = req.body

  const data = await User.find({ email })

  if (!data.length) {
    res.status(400);
    return next(new Error('This user is not  found in our database'))
  }


  if(data[0].password != password){
    res.status(401);
    return next(new Error('Invalid credential'))
  }


res.json({
  data,
  message:"Login Successfull",
  success:true
})
  // console.log(data)
}

module.exports = { userSignUp, getUserData, userLogin }
