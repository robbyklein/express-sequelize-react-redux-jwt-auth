const jwt = require('jwt-simple')

module.exports = user => {
    const sub = {
        id: user.id,
        role: user.role,
        name: user.name,
        email: user.email,
        confirmed: user.confirmed
    }
    const iat = new Date().getTime()
    const token = jwt.encode({ sub, iat }, process.env.SECRET)

    return token
}
