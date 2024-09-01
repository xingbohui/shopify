import React from "react";
import { listData, titleInfoData } from "./helper";
import { CardInfo } from "../components/card-info";
import { TitleInfo } from "../components/title-info";

export const VIPTiers = () => {
  return (
    <div
      className={`py-16 flex flex-col w-screen h-90 gap-8 px-8  themeColorBgViceClass`}
    >
      <TitleInfo data={titleInfoData} />

      <div className="flex flex-row items-cente gap-8 flex-wrap justify-center">
        {listData.map((m) => {
          return <CardInfo rowKey={m.key} item={m} />;
        })}
      </div>
    </div>
  );
};
