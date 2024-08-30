import React from "react";
import ReactDOM from "react-dom/client";
import { Head } from "./head/head";
import { Mine } from "./mine/mine";
import { Point } from "./point/point";
import { Redeem } from "./redeem/redeem";
import { Referral } from "./referral/referral";
import { VIPTiers } from "./vip-tiers/vip-tiers";
import { Footer } from "./footer/footer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Head />
    <Mine />
    <Point />
    <Redeem />
    <Referral />
    <VIPTiers />
    <Footer />
  </React.StrictMode>
);
