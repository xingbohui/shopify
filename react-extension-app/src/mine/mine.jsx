import React, { useState } from "react";
import { observer } from "mobx-react";
import { CardListInfo } from "../components/card-list-info";
import { CardInfo } from "../components/card-info";
import { PointListInfo } from "../components/point-list-info";
import { listData } from "./helper";
import { commonStore } from "../store";

export const Mine = observer(() => {
  const [selectedInfo, setSelectedInfo] = useState("");
  const { points } = commonStore;
  const onOption = (item) => {
    setSelectedInfo(!selectedInfo ? item : "");
  };
 

  return (
    <div
      className={`p-20 flex flex-col w-screen h-90 themeColorBgViceClass gap-16 `}
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-slate-500	text-xl">Hi, bohui</span>
        <div>
          <span className="text-3xl	font-semibold">Your current points: </span>
          <span className={`text-3xl font-semibold themeColorTextClass`}>
            {points}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-cente gap-16">
        {listData.map((m) => {
          console.log(122, selectedInfo.key, m.key);
          return (
            <div className="flex flex-col gap-4">
              <CardListInfo
                item={m}
                rowKey={m.key}
                hgClass="h-28"
                onOption={onOption}
              />
              {selectedInfo.key === "rewards" && selectedInfo.key === m.key && (
                <div className="flex flex-row gap-4">
                  {m.subListData?.map((m) => {
                    return <CardInfo rowKey={m.key} item={m} />;
                  })}
                </div>
              )}
              {selectedInfo.key === m.key && selectedInfo.key === "balance" && (
                <div className="flex flex-col gap-4 bgWhiteClass rounded-lg">
                  {m.subListData?.map((m) => {
                    return <PointListInfo rowKey={m.key} item={m} />;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});
