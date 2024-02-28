import React from 'react';
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {

    constructor() {
        super();
        this.state = {
            message: "Hello, Guest!",
            buttonText: "Log in"
        };
    }

    handleClick() {
        this.setState((prevState) => {
            console.log("Previous state", prevState);
            return {
                message: prevState.message === "Hello, Guest!" ? "Welcome back, User!" : "Hello, Guest!",
                buttonText: prevState.buttonText === "Log in" ? "Log out" : "Log in"
            }
        });
    }   

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        );
    }
}

export default NavBarSimple;
