import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: true,
            isLoggedIn: false
        }
    }

    handleSignIn = () => {
        this.setState({ isLoggedIn: true })
        console.log(this)
    }

    handleSignOut = () => {
        this.setState({ isLoggedIn: false })
        console.log(this)
    }

    render() {
        return (
            <div>
                <UserData isLoaded={this.state.isLoaded} />
                <UserMessage
                    isLoggedIn={this.state.isLoggedIn}
                    handleSignIn={this.handleSignIn}
                    handleSignOut={this.handleSignOut}
                />
            </div>
        )
    }
}

export default ConditionalRenderingClass