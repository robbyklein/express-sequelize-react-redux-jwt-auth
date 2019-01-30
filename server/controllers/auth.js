const { User } = require('../models')
const generateToken = require('../helpers/generate-token')
const uniqueString = require('unique-string')
const hashPassword = require('../helpers/hash-password')

exports.login = (req, res) => {
    const auth_token = generateToken(req.user)
    res.send({ auth_token })
}

exports.signup = async (req, res) => {
    const { email, password, name, role } = req.body

    // Otherwise create an account and send token
    const user = await User.create({ email, password, name, role })
    const auth_token = generateToken(user)

    // Send confirmation email here
    console.log(`/activate/${user.confirmToken}`)

    res.send({ auth_token })
}

exports.activate = async (req, res) => {
    const { confirmToken } = req.params
    const user = await User.findOne({ where: { confirmToken } })

    if (!user) {
        res.send({ errors: ['Invalid confirmation token'] })
    } else {
        const updated = await user.update({ confirmToken: null, confirmed: true })
        const auth_token = generateToken(updated)
        res.send({ auth_token })
    }
}

exports.forgot = async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) {
        res.status(422).send({
            errors: ['No account associated with this email address.'],
        })
    } else {
        await user.update({
            passwordToken: uniqueString(),
        })

        // Send password reset email here
        console.log(`/reset/${user.passwordToken}`)

        res.send({ success: 'Password reset issued.' })
    }
}

exports.reset = async (req, res) => {
    const { passwordToken, password } = req.body
    const user = await User.findOne({ where: { passwordToken } })

    if (!user) {
        res.status(402).send({ errors: ['Invalid reset token'] })
    } else {
        const hash = await hashPassword(password)

        const updated = await user.update({
            passwordReset: new Date(),
            passwordToken: null,
            password: hash,
        })

        const auth_token = generateToken(updated)
        res.send({ auth_token })
    }
}
