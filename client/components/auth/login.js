import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginUser, setLoginEmail, setLoginPassword } from '../../actions/auth'
import { Layout, Box, Field, Button, Errors, Logo } from '../shared'

class Login extends Component {
    email = React.createRef()
    password = React.createRef()

    handleSubmit = e => {
        e.preventDefault()
        const { loginUser, email, password } = this.props
        loginUser(email, password)
    }

    render() {
        const { setLoginEmail, setLoginPassword, email, password } = this.props

        return (
            <Layout className="auth-page login">
                <Link to="/" className="logo">
                    <Logo />
                </Link>
                <Box size="tiny">
                    <h2>Welcome back</h2>
                    <Errors />
                    <form onSubmit={this.handleSubmit}>
                        <Field
                            onChange={setLoginEmail}
                            type="text"
                            id="email"
                            value={email}
                            placeholder="Email Address"
                        />
                        <Field
                            onChange={setLoginPassword}
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Password"
                        />
                        <Field type="empty">
                            <Button type="submit" className="full">
                                Login
                            </Button>
                        </Field>
                    </form>
                    <ul className="auth-bottom">
                        <li>
                            <Link to="/signup">No account? Signup</Link>
                        </li>
                        <li>
                            <Link to="/forgot">Forgot password?</Link>
                        </li>
                    </ul>
                </Box>
            </Layout>
        )
    }
}

function mapStateToProps({ auth: { loginEmail, loginPassword } }) {
    return {
        email: loginEmail,
        password: loginPassword,
    }
}

export default connect(
    mapStateToProps,
    { loginUser, setLoginEmail, setLoginPassword }
)(Login)
