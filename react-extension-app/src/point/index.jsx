import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import {Point} from './point'


const root = ReactDOM.createRoot(document.getElementById("point"));
root.render(
  <React.StrictMode>
    <Point />
  </React.StrictMode>
);
