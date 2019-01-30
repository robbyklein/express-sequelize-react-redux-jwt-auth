import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Layout, Box, Logo } from '../shared'

export default class ForgotSuccess extends Component {
    render() {
        return (
            <Layout className="auth-page forgot">
                <Link to="/" className="logo">
                    <Logo />
                </Link>
                <Box size="xs">
                    <h2>Check your email</h2>
                    <p>We've sent you a link to reset your password.</p>
                </Box>
            </Layout>
        )
    }
}
