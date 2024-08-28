import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import gift from "./common/svg/gift.svg";
import chevionRight from "../common/icon"
import { themeColorTextClass } from "../common/style/theme-color";

const App = () => {
  const list = [
    {
      name: "My rewards",
      icon: gift,
      key: "rewards",
      showSvg: false,
    },
    {
      name: "My balance",
      showSvg: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-10 fill-yellow-600 stroke-yellow-600	"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>
      ),
      key: "balance",
    },
  ];

  return (
    <div className="p-5 flex flex-col w-screen h-90 bg-yellow-50 gap-8 px-8">
      <div className="flex flex-col items-center">
        <span className="text-slate-500	 text-sm">Hi, bohui</span>
        <div>
          <span className="text-3xl	font-semibold">Your current points: </span>
          <span className={`text-3xl font-semibold ${themeColorTextClass}	`}>
            1000
          </span>
        </div>
      </div>

      <div className="flex flex-col items-cente gap-8 ">
        {list.map((m) => {
          return (
            <div
              key={m.key}
              className="flex flex-row justify-between items-center rounded-lg bg-white p-4 	"
            >
              <div className="flex flex-row gap-2 items-center 	">
                {m.showSvg ? (
                  m.icon
                ) : (
                  <img className="w-12 h-12	" src={m.icon} alt="Gift"></img>
                )}
                <span className="font-sans font-semibold">{m.name}</span>
              </div>
              <img className="w-5 h-5 	" src={chevionRight} alt="Gift"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("mine"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
