import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Layout, Box, Field, Button, Errors, Logo} from '../shared'
import {
    signupUser,
    setSignupEmail,
    setSignupPassword,
    setSignupName,
} from '../../actions/auth'

class Signup extends Component {
    handleSubmit = e => {
        e.preventDefault()
        const { name, email, password, signupUser } = this.props
        signupUser(name, email, password)
    }

    render() {
        const {
            email,
            name,
            password,
            setSignupEmail,
            setSignupPassword,
            setSignupName,
        } = this.props

        return (
            <Layout className="auth-page signup">
                <Link to="/" className="logo">
                    <Logo />
                </Link>
                <Box size="tiny">
                    <h2>Create account</h2>
                    <Errors />
                    <form onSubmit={this.handleSubmit}>
                        <Field
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={setSignupName}
                        />
                        <Field
                            type="text"
                            id="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={setSignupEmail}
                        />
                        <Field
                            ref={this.password}
                            type="password"
                            id="password"
                            placeholder="Password (8+ characters)"
                            value={password}
                            onChange={setSignupPassword}
                        />
                        <Field type="empty">
                            <Button type="submit" className="full">
                                Signup
                            </Button>
                        </Field>
                    </form>
                    <ul className="auth-bottom">
                        <li>
                            <Link to="/login">Have an account? Login</Link>
                        </li>
                    </ul>
                </Box>
            </Layout>
        )
    }
}

function mapStateToProps({ auth: { signupName, signupEmail, signupPassword } }) {
    return {
        email: signupEmail,
        password: signupPassword,
        name: signupName,
    }
}

export default connect(
    mapStateToProps,
    { signupUser, setSignupEmail, setSignupPassword, setSignupName }
)(Signup)
