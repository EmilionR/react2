import React from 'react'

function UserMessage(props) {
    return (
        <div>
            {
                props.isLoggedIn ? (
                    <div>
                        <p>Welcome to the Site! Please complete the steps below:</p>
                        <ol>
                            <li>Complete Profile</li>
                            <li>Upload Picture</li>
                            <li>Complete Survey</li>
                        </ol>
                        <button onClick={props.handleSignOut}>Log out</button>
                    </div>
                ) : (
                    <div>
                        <p>Please log in.</p>
                        <button onClick={props.handleSignIn}>Log in</button>
                    </div>
                )
            }
        </div>
    )
}

export default UserMessage
