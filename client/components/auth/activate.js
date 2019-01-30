import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Layout, Box, Logo } from '../shared'
import { activateUser } from '../../actions/auth'

class Activate extends Component {
    componentDidMount() {
        const { match, activateUser } = this.props
        const { confirmToken } = match.params
        activateUser(confirmToken)
    }

    render() {
        return (
            <Layout className="auth-page forgot">
                <Link to="/" className="logo">
                    <Logo />
                </Link>
                <Box size="xs">
                    <h2>Activating...</h2>
                    <p>Please wait while we activate you're account.</p>
                </Box>
            </Layout>
        )
    }
}

export default connect(
    null,
    { activateUser }
)(Activate)
