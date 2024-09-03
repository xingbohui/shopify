import React, { useState } from "react";
import { CardListInfo } from "../components/card-list-info";
import { CardInfo } from "../components/card-info";
import { listData } from "./helper";

export const Mine = () => {
  const [selectedInfo, setSelectedInfo] = useState("");
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
            {window.localStorage.getItem("currPoint") || 1000}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-cente gap-16">
        {listData.map((m) => {
          return (
            <div className="flex flex-col gap-4">
              <CardListInfo
                item={m}
                rowKey={m.key}
                hgClass="h-28"
                onOption={onOption}
              />
              {selectedInfo.key === "rewards" && (
                <div className="flex flex-row gap-4">
                  {m.subListData?.map((m) => {
                    return <CardInfo rowKey={m.key} item={m} />;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
