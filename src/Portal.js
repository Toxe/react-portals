import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Portal extends Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0 };
    }

    handleClick = () => {
        console.log("handleClick in:", this);
        this.setState(state => ({
            clicks: state.clicks + 1
        }));
    };

    render() {
        return ReactDOM.createPortal(
            <div onClick={this.handleClick}>
                <div>
                    {this.props.title} (clicks: {this.state.clicks})
                </div>
                <PortalChildButton />
            </div>,
            document.getElementById("portal-root")
        );
    }
}

class PortalChildButton extends Component {
    render() {
        return (
            <div>
                <button>Portal Child Button</button>
            </div>
        );
    }
}
