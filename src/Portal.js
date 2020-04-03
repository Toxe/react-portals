import React, { Component } from 'react'
import ReactDOM from "react-dom";

export default class Portal extends Component {
    render() {
        return ReactDOM.createPortal(<div>portal</div>, document.getElementById("portal-root"));
    }
}
