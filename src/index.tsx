import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/fonts/stylesheet.css";
import "./assets/scss/global.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
