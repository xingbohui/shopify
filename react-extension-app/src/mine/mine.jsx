import React from "react";
import { chevionRightIcon } from "../common/icon";
import {
  themeColorTextClass,
  themeColorBgViceClass,
} from "../common/style/theme-color";
import { listData } from "./helper";

export const Mine = () => {
  return (
    <div
      className={`p-20 flex flex-col w-screen h-90  ${themeColorBgViceClass} gap-16 `}
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-slate-500	text-xl">Hi, bohui</span>
        <div>
          <span className="text-3xl	font-semibold">Your current points: </span>
          <span className={`text-3xl font-semibold  ${themeColorTextClass}`}>
            1000
          </span>
        </div>
      </div>

      <div className="flex flex-col items-cente gap-16 ">
        {listData.map((m) => {
          return (
            <div
              key={m.key}
              className="flex flex-row justify-between items-center rounded-lg bg-white p-4 h-28"
            >
              <div className="flex flex-row gap-2 items-center 	">
                {m.icon}
                <span className="font-sans font-semibold">{m.name}</span>
              </div>
              {chevionRightIcon}
            </div>
          );
        })}
      </div>
    </div>
  );
};
