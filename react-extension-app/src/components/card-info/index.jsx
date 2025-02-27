import React from "react";

export const CardInfo = (props) => {
  const {
    item,
    isCustomJump,
    isRowClass,
    widthClass,
    isHidBorder,
    onCustomJump,
    updateOpint,
  } = props;

  const navToProductPage = (item) => {
    if (isCustomJump) {
      onCustomJump(item);
      return;
    }
    updateOpint(item);

    if (item.type === "open") {
      return window.open(item.navLink);
    }
    item.navLink && (window.location.href = item.navLink);
  };

  return (
    <div
      className={`bgWhiteClass text-center relative justify-between ${
        widthClass ? widthClass : "w-60"
      } ${isHidBorder ? "" : "border"} ${
        isRowClass ? isRowClass : "flex-col"
      } flex h-full  gap-2 items-center rounded-lg px-3 py-5 border-slate-200`}
    >
      {item.rgTpText && (
        <div
          className={`themeColorBgClass textWhiteClass text-xs px-2 py-1 absolute right-0.5 top-0`}
        >
          <span>{item.rgTpText}</span>
        </div>
      )}

      <div className={`flex flex-col items-center`}>
        {item.image && <img className="w-8" src={item.image} alt="" />}

        {item.icon?.length > 0 && (
          <div className="flex flex-row">{item.icon?.map((m) => m)}</div>
        )}

        <div
          className={`flex flex-col ${
            isRowClass ? "items-start" : "items-center"
          }`}
        >
          <span className="font-sans font-semibold">{item.name}</span>
          {item.code && (
            <span className="themeColorTextClass">{item.code}</span>
          )}
          {item.tips && <span className="text-slate-400 text-sm">{item.tips}</span>}
        </div>
      </div>
      {item.butText && (
        <button
          onClick={() => navToProductPage(item)}
          className={`themeColorBgClass py-1 px-4 rounded-full text-white`}
        >
          {item.butText}
        </button>
      )}
    </div>
  );
};
