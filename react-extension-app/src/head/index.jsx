import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { Head } from "./head";

const root = ReactDOM.createRoot(document.getElementById("head"));
root.render(
  <React.StrictMode>
    <Head />
  </React.StrictMode>
);
