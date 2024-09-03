import React, { useState } from "react";
import "./index.css";
import { listData, subListData } from "./helper";
import { CardListInfo } from "../components/card-list-info";
import { CardInfo } from "../components/card-info";
import { chevronLeft } from "../common/icon";

export const PartyButton = () => {
  const [showQuickEntry, setShopQuickEntry] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState("");
  const onTrigger = () => {
    setShopQuickEntry(!showQuickEntry);
  };

  const onOption = (item) => {
    setSelectedInfo(item);
  };

  const onBack = () => {
    setSelectedInfo("");
  };

  return (
    <div className="fixed right-10 bottom-10 z-10">
      <button is="party-button" onClick={onTrigger}>
        <span class="visually-hidden">Start the party!</span>
      </button>
      {showQuickEntry && (
        <div className="bg-cyan-500 shadow-lg overflow-hidden shadow-cyan-500/50 relative flex flex-col justify-between rounded-lg bgWhiteClass">
          <div className="px-4 items-center h-36 flex flex-row justify-between  bg-center bg-cover bg-[url('https://shuyun.com/wp-content/themes/shuyun/statics/dist/img/index/index_yx_solution_hd_item.png')]">
            <span className="textWhiteClass text-xl font-semibold">shuyun loyalty</span>
            <img
              className="absolute top-0 right-0 w-60 h-60"
              src="https://shuyun.com/wp-content/uploads/2023/03/2023032009452576.png"
              alt=""
            />
          </div>

          <div className="z-10 p-6 rounded-lg bgWhiteClass w-96">
            {!selectedInfo && (
              <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-1 justify-center">
                  <span className="text-lg	font-semibold">
                    Your current points:
                  </span>
                  <span className={`text-lg font-semibold themeColorTextClass`}>
                    {window.localStorage.getItem("currPoint") || 1000}
                  </span>
                </div>
                <div className="flex flex-col gap-3 h-64">
                  {listData.map((m) => {
                    return (
                      <CardListInfo
                        item={m}
                        rowKey={m.key}
                        hgClass="h-20"
                        onOption={onOption}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {selectedInfo.key && (
              <div className="flex flex-col gap-10 ">
                <div className="relative flex flex-row items-center justify-center">
                  <div
                    className="absolute left-1 cursor-pointer"
                    onClick={onBack}
                  >
                    {chevronLeft}
                  </div>
                  <div className="flex flex-row items-center gap-2 font-semibold">
                    {selectedInfo.icon}
                    <span>{selectedInfo.name}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 h-64  overflow-y-scroll">
                  {subListData.map((m) => {
                    return (
                      <CardInfo
                        item={m}
                        rowKey={m.key}
                        isRowClass="flex-row justify-between"
                        widthClass="w-80"
                        isHidBorder={true}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
