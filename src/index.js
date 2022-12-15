import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataContext from "./Contexts/DataContext";
import Toastify from "./Utilities/Toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DataContext>
        <App />
        <Toastify />
    </DataContext>
);
