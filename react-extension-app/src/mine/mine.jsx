import React from "react";
import { chevionRightIcon, giftIcon, sparklesIcon } from "../common/icon";
import {
  themeColor600TextClass,
  themeColor50BgClass,
} from "../common/style/theme-color";

export const Mine = () => {
  const listData = [
    {
      name: "My rewards",
      icon: giftIcon,
      key: "rewards",
    },
    {
      name: "My balance",
      icon: sparklesIcon,
      key: "balance",
    },
  ];

  return (
    <div
      className={`p-20 flex flex-col w-screen h-90 ${themeColor50BgClass} gap-16 `}
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-slate-500	text-sm">Hi, bohui</span>
        <div>
          <span className="text-3xl	font-semibold">Your current points: </span>
          <span className={`text-3xl font-semibold ${themeColor600TextClass}`}>
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
