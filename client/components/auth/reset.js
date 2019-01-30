import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Layout, Box, Field, Button, Errors, Logo } from '../shared'
import { resetPassword, setResetPassword } from '../../actions/auth'

class Reset extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const { password, resetPassword, match } = this.props
        const { passwordToken } = match.params
        resetPassword(password, passwordToken)
    }

    render() {
        const { password, setResetPassword } = this.props

        return (
            <Layout className="auth-page reset">
                <Link to="/" className="logo">
                    <Logo />
                </Link>
                <Box size="tiny">
                    <h2>Reset Password</h2>
                    <p>Enter a new password to reset the password on your account</p>
                    <Errors />
                    <form onSubmit={this.handleSubmit}>
                        <Field
                            onChange={setResetPassword}
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                        />
                        <Field type="empty">
                            <Button type="submit" className="full">
                                Change Password
                            </Button>
                        </Field>
                    </form>
                </Box>
            </Layout>
        )
    }
}

function mapStateToProps({ auth: { resetPassword } }) {
    return {
        password: resetPassword,
    }
}

export default connect(
    mapStateToProps,
    { resetPassword, setResetPassword }
)(Reset)
