import React from 'react'

function NavBarChild(props) {
    return (
        props.loggedIn ?
            <div>
                <form>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="username" required />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="username" required />
                    <button onClick={props.handleClick}>Submit</button>
                </form>
            </div>
            :
            <button onClick={props.handleClick}>{props.buttonText}</button>
    )
}

export default NavBarChild
