import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Layout, Box, Logo } from '../shared'

export default class InvalidConfirm extends Component {
    render() {
        return (
            <Layout className="auth-page forgot">
                <Link to="/" className="logo">
                    <Logo />
                </Link>
                <Box size="xs">
                    <h2>Failed</h2>
                    <p>
                        The confirmation URL is invalid. Please try again or contact us if
                        the problem persists.
                    </p>
                </Box>
            </Layout>
        )
    }
}
