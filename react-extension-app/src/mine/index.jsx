import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { Mine } from "./mine";

const root = ReactDOM.createRoot(document.getElementById("mine"));
root.render(
  <React.StrictMode>
    <Mine />
  </React.StrictMode>
);
