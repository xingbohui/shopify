import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { PartyButton } from "./party-button";

const root = ReactDOM.createRoot(document.getElementById("partyButton"));
root.render(
  <React.StrictMode>
    <PartyButton />
  </React.StrictMode>
);
