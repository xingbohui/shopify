import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Head = () => {
  return (
    <div className="p-5 flex flex-col justify-center gap-3 w-screen h-80 bg-center bg-cover bg-[url('https://cdn.bonloyalty.com/loyalty_page/ptOqRjQ018P66tR6opunwPUNRyWIjNno2jECTBQx.png')]">
      <span className="font-sans font-semibold text-white text-xl">
        ShuYun Rewards
      </span>
      <p className="text-slate-400 w-90">
        Become a member of our loyalty program and gain access to exclusive
        member benefits every time you shop. Many attractive rewards are waiting
        for you!
      </p>
      <div className="flex flex-row gap-2">
        <button className="bg-amber-50 py-2 px-6 rounded-full text-yellow-600	">
          Earn points
        </button>
        <button className="bg-amber-300 py-2 px-6 rounded-full text-white	">
          Redeem points
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("head"));
root.render(
  <React.StrictMode>
    <Head />
  </React.StrictMode>
);
