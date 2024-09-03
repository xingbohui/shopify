import React from "react";
import { chevionRightIcon } from "../../common/icon";

export const CardListInfo = (props) => {
  const { item, hgClass, onOption } = props;
  return (
    <div
      onClick={() => onOption(item)}
      key={item.key}
      className={`${hgClass} border-slate-200	border flex flex-row justify-between items-center rounded-lg bg-white p-4`}
    >
      <div className="flex flex-row gap-2 items-center">
        {item.icon}
        <span className="font-sans font-semibold">{item.name}</span>
      </div>
      {chevionRightIcon}
    </div>
  );
};
