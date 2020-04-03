import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Portal from "./Portal";

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Portal />
    </React.StrictMode>,
    document.getElementById("app-root")
);
