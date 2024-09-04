import React, { useState } from "react";
import { listData, titleInfoData } from "./helper";
import { CardInfo } from "../components/card-info";
import { TitleInfo } from "../components/title-info";
import { commonStore } from "../store";

export const Redeem = () => {
  const [selectedOptionInfo, setSelectedOptionInfo] = useState([]);
  const { updateOpint } = commonStore;
  const onCustomJump = (item) => {
    if (item.disable) {
      return;
    }
    selectedOptionInfo.push(item);
    setSelectedOptionInfo(Object.assign([], selectedOptionInfo));
    // 积分不足
    if (item.isLackPoint) {
      setTimeout(() => {
        selectedOptionInfo.splice(
          selectedOptionInfo.findIndex((f) => f.key === 1),
          1
        );
        setSelectedOptionInfo(Object.assign([], selectedOptionInfo));
      }, 3000);
    } else {
      updateOpint(item);
    }
  };

  return (
    <div
      className={`py-10 flex flex-col w-screen h-90 gap-8 px-8 themeColorBgViceClass`}
    >
      <TitleInfo data={titleInfoData} />
      <div className="flex flex-row items-cente gap-8 flex-wrap justify-center">
        {listData.map((m) => {
          return (
            <div key={m.key} className="h-52">
              {selectedOptionInfo?.some((s) => s.key === m.key) ? (
                m.subListdata?.map((s) => {
                  return <CardInfo item={s} updateOpint={updateOpint} />;
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
