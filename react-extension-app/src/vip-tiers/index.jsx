import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { VIPTiers } from "./vip-tiers";

const root = ReactDOM.createRoot(document.getElementById("vipTiers"));
root.render(
  <React.StrictMode>
    <VIPTiers />
  </React.StrictMode>
);
