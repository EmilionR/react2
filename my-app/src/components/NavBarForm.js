import css from './css/NavBarForm.module.css'
import React, { Component } from 'react'
import NavBarChild from './NavBarChild'


export default class NavBarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            buttonText: "Log in"
        };
    }
    handleClick = () => {
        this.setState((prevState) => ({
            loggedIn: prevState.loggedIn ? false : true,
            buttonText: prevState.buttonText === "Log in" ? "Log out": "Log in"
        }));
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <NavBarChild loggedIn={this.state.loggedIn} buttonText={this.state.buttonText} handleClick={this.handleClick} />
            </div>
        )
    }
}