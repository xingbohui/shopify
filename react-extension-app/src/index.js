import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Head } from "./head/head";
import { Point } from "./point/point";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Head />
    <Point />
  </React.StrictMode>
);
