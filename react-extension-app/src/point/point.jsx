import React from "react";
import "../index.css";
import { themeColorBgClass } from "../common/style/theme-color";
import { listData } from "./helper";

export const Point = () => {
  return (
    <div className="p-5 flex flex-col w-screen h-90  gap-8 px-8">
      <div className="flex flex-col items-center">
        <span className="text-3xl	font-semibold">Earn points</span>
        <span className="text-slate-400">
          You can earn points for every dollar you spend on our website. Earn
          even more points by completing the actions below.
        </span>
      </div>

      <div className="flex flex-row items-cente gap-8 flex-wrap ">
        {listData.map((m) => {
          return (
            <div
              key={m.key}
              className="text-center justify-between w-60 h-50 flex flex-col gap-2 items-center rounded-lg p-3 border-slate-200	border"
            >
              {m.icon}
              <span className="font-sans font-semibold">{m.name}</span>
              <span className="text-slate-400">{m.tips}</span>

              <button
                className={`${themeColorBgClass} py-2 px-6 rounded-full text-white`}
              >
                {m.butText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
