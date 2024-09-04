import React from "react";

export const PointListInfo = (props) => {
  const { item } = props;
  return (
    <div
      className={`flex flex-row p-4 justify-between border-b border-slate-200 items-center ${
        item.key === 1 ? "bg-slate-200" : ""
      }`}
    >
      <div className="flex flex-row items-center w-96 gap-5">
        <span className={`text-base ${item.key === 1 ? "font-semibold" : ""}`}>
          {item.name}
        </span>
        <span
          className={`text-smtext-slate-400 ${
            item.key === 1 ? "font-semibold" : ""
          }`}
        >
          {item.tips}
        </span>
      </div>
      <span
        className={`text-sm	${
          item.isCutOpint && item.key !== 1
            ? "redColorTextClass"
            : "themeColorTextClass"
        } ${item.key === 1 ? "font-semibold" : ""}`}
      >
        {item.point}
      </span>
    </div>
  );
};
