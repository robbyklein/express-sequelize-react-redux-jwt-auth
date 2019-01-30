import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Layout, Box, Logo } from '../shared'

export default class InvalidReset extends Component {
    render() {
        return (
            <Layout className="auth-page forgot">
                <Link to="/" className="logo">
                    <Logo />
                </Link>
                <Box size="xs">
                    <h2>Reset your password</h2>
                    <p>
                        The reset URL is invalid. Please try again or contact support if
                        the problem persists.
                    </p>
                </Box>
            </Layout>
        )
    }
}
