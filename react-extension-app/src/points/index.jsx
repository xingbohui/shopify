import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Points = () => {
  return (
    <div>
      <h4>shuyun</h4>
      <p></p>
      <div className="">
        <button>Earn points</button>
        <button>Redeem points</button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("point"));
root.render(
  <React.StrictMode>
    <Points />
  </React.StrictMode>
);
