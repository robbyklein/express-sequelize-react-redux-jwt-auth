import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>You're Authenticated!</h1>
        <Link to="/logout">Logout</Link>
      </div>
    )
  }
}
