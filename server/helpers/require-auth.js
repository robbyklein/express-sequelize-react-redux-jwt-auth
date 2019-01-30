module.exports = (req, res, next) => {
    if (req.user.confirmed) {
        next()
    } else {
        res.redirect('/login')
    }
  }