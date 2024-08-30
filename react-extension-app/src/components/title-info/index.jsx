import React from "react";

export const TitleInfo = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-3xl	font-semibold">{data.title}</span>
      <span className="text-slate-400">{data.tips}</span>
    </div>
  );
};
