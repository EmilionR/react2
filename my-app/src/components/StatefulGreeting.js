import React from 'react';

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Babygirl!",
            buttonText: "Kiss",
            count: 0
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous state", prevState);
            console.log("Previous props", prevProps);
            return {
                introduction: prevState.introduction === "Hii noi!" ? "Babygirl!" : "Hii noi!",
                buttonText: prevState.buttonText === "Hug" ? "Kiss" : "Hug"
            }
        });
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log("Previous state", prevState);
            console.log("Previous props", prevProps);
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>{this.state.count}</button>
            </div>
        )
    }
}

export default StatefulGreeting;