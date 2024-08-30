import React from "react";
import {
  bgWhiteClass,
  themeColor600BgClass,
  textWhiteClass,
} from "../../common/style/theme-color";

export const CardInfo = (props) => {
  const { item } = props;
  return (
    <div
      className={`${bgWhiteClass} text-center relative justify-between ${
        item.widthClass ? item.widthClass : "w-60"
      } h-50 flex flex-col gap-2 items-center rounded-lg px-3 py-5 border-slate-200	border`}
    >
      {item.rgTpText && (
        <div
          className={`${themeColor600BgClass} ${textWhiteClass} text-xs	 px-2 py-1 absolute right-0.5 top-0`}
        >
          <span>{item.rgTpText}</span>
        </div>
      )}

      <div className="flex flex-row">{item.icon?.map((m) => m)}</div>

      <span className="font-sans font-semibold">{item.name}</span>
      {item.tips && <span className="text-slate-400">{item.tips}</span>}

      {item.butText && (
        <button
          className={`${item.butBgColorClass} py-2 px-6 rounded-full text-white`}
        >
          {item.butText}
        </button>
      )}
    </div>
  );
};
