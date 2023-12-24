const errorHandler = (err, req, res, next) => {

  const statuscode = res.statusCode || 500

  switch (statuscode) {
    case 400:
      {
        res.json({
          title: 'Not Found',
          message: err.message,
          success: false,
        })
      }
      break

    case 401:
      {
        res.json({
          title: 'Unauthorized',
          message: err.message,
          success: false,
        })
      }

      break

    default:
  }
}

module.exports = errorHandler
