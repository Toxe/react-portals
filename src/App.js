import React, { Component } from "react";
import Portal from "./Portal";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
    };

    handleClick = () => {
        console.log("handleClick in:", this);
        this.setState(state => ({
            clicks: state.clicks + 1
        }));
    };

    render() {
        return (
            <div onClick={this.handleClick}>
                <div>App in app-root (clicks: {this.state.clicks})</div>
                <Portal />
            </div>
        );
    }
}
