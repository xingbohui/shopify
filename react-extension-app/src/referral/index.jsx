import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { Referral } from "./referral";

const root = ReactDOM.createRoot(document.getElementById("referral"));
root.render(
  <React.StrictMode>
    <Referral />
  </React.StrictMode>
);
