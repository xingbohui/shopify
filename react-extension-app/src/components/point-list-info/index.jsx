import React from "react";

export const PointListInfo = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center w-40 gap-4">
        <span className="text-3xl	font-semibold">{data.title}</span>
        <span className="text-slate-400">{data.tips}</span>
      </div>
      <span className={`${data.isNegative}`}>{data.val}</span>
    </div>
  );
};
