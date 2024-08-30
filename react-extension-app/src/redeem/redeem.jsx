import React from "react";
import { themeColor50BgClass } from "../common/style/theme-color";
import { listData, titleInfoData } from "./helper";
import { CardInfo } from "../components/card-info";
import { TitleInfo } from "../components/title-info";

export const Redeem = () => {
  return (
    <div
      className={`py-10 flex flex-col w-screen h-90 gap-8 px-8 ${themeColor50BgClass}`}
    >
      <TitleInfo data={titleInfoData} />

      <div className="flex flex-row items-cente gap-8 flex-wrap justify-center ">
        {listData.map((m) => {
          return <CardInfo key={m.key} item={m} />;
        })}
      </div>
    </div>
  );
};
