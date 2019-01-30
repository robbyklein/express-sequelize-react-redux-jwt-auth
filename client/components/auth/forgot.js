import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { forgotPassword, setForgotEmail } from '../../actions/auth'
import { Layout, Box, Field, Button, Errors, Logo } from '../shared'

class Forgot extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const { email, forgotPassword } = this.props
        forgotPassword(email)
    }

    render() {
        const { email, setForgotEmail } = this.props

        return (
            <Layout className="auth-page forgot">
                <Link to="/" className="logo">
                    <Logo />
                </Link>
                <Box size="xs">
                    <h2>Reset your password</h2>
                    <p>
                        Enter your email address below and we'll send you a link to reset
                        your password.
                    </p>
                    <Errors />
                    <form onSubmit={this.handleSubmit}>
                        <Field
                            onChange={setForgotEmail}
                            type="text"
                            id="email"
                            placeholder="Email Address"
                            value={email}
                        />
                        <Field type="empty">
                            <Button type="submit" className="full">
                                Submit
                            </Button>
                        </Field>
                    </form>
                    <ul className="auth-bottom">
                        <li>
                            <Link to="/signup">Remember it? Login</Link>
                        </li>
                    </ul>
                </Box>
            </Layout>
        )
    }
}

function mapStateToProps({ auth: { forgotEmail } }) {
    return {
        email: forgotEmail,
    }
}

export default connect(
    mapStateToProps,
    { forgotPassword, setForgotEmail }
)(Forgot)
