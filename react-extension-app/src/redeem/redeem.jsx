import React, { useState } from "react";
import { listData, titleInfoData } from "./helper";
import { CardInfo } from "../components/card-info";
import { TitleInfo } from "../components/title-info";

export const Redeem = () => {
  const [selectedOptionInfo, setSelectedOptionInfo] = useState("");
  const onCustomJump = (item) => {
    setSelectedOptionInfo(item);
  };

  return (
    <div
      className={`py-10 flex flex-col w-screen h-90 gap-8 px-8 themeColorBgViceClass`}
    >
      <TitleInfo data={titleInfoData} />
      <div className="flex flex-row items-cente gap-8 flex-wrap justify-center ">
        {listData.map((m) => {
          return (
            <div key={m.key}>
              {selectedOptionInfo?.key === m.key ? (
                m.subListdata?.map((s) => {
                  return <CardInfo item={s} />;
                })
              ) : (
                <CardInfo item={m} isCustomJump onCustomJump={onCustomJump} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
