import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

export default ChildComponent => {
    class ComposedComponent extends Component {
        shouldNavigateAway() {
            const { auth_token, confirmed, push } = this.props

            if (auth_token && !confirmed) {
                push('/confirm')
            } else if (!auth_token) {
                push('/login')
            }
        }

        // Our component just got rendered
        componentDidMount() {
            this.shouldNavigateAway()
        }

        // Our component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway()
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    }

    function mapStateToProps({ auth: { auth_token, confirmed } }) {
        return { auth_token, confirmed }
    }

    return connect(mapStateToProps, { push })(ComposedComponent)
}
