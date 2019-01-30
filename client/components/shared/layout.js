import React, { Component, Fragment } from 'react'

import { Sidebar, Flash, PageHeader } from './index'

export default class Layout extends Component {
    render() {
        const { sidebar, header, className, children } = this.props

        return (
            <div className={className}>
                {sidebar ? <Sidebar /> : ''}
                {header ? <PageHeader /> : ''}
                <main className="main">{children}</main>
                <Flash />
            </div>
        )
    }
}
