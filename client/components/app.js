import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../index'

import {
    Login,
    Logout,
    Forgot,
    Signup,
    Reset,
    Confirm,
    InvalidConfirm,
    InvalidReset,
    Activate,
    ForgotSuccess,
    RequireAuth,
} from './auth'
import { Dashboard } from './dashboard'

export default class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={RequireAuth(Dashboard)} />
                    <Route exact path="/dashboard" component={RequireAuth(Dashboard)} />

                    {/* Authentication */}
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/forgot" component={Forgot} />
                    <Route exact path="/forgot-success" component={ForgotSuccess} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/confirm" component={Confirm} />
                    <Route exact path="/invalid-confirm" component={InvalidConfirm} />
                    <Route exact path="/invalid-reset" component={InvalidReset} />
                    <Route exact path="/reset/:passwordToken" component={Reset} />
                    <Route exact path="/activate/:confirmToken" component={Activate} />
                </Switch>
            </ConnectedRouter>
        )
    }
}