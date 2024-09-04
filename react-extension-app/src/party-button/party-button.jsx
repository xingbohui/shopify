import React, { useState } from "react";
import { observer } from "mobx-react";
import "./index.css";
import { listData, subListData } from "./helper";
import { CardListInfo } from "../components/card-list-info";
import { CardInfo } from "../components/card-info";
import { chevronLeft } from "../common/icon";
import { commonStore } from "../store";

export const PartyButton = observer(() => {
  const [showQuickEntry, setShopQuickEntry] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState("");
  const { points, updateOpint } = commonStore;

  const isLogin = window.localStorage.getItem("isLogin");
  const onTrigger = () => {
    setShopQuickEntry(!showQuickEntry);
  };

  const onOption = (item) => {
    setSelectedInfo(item);
  };

  const onBack = () => {
    setSelectedInfo("");
  };

  const onLogin = () => {
    window.localStorage.setItem("isLogin", true);
    window.localStorage.setItem("currPoint", 1000);
    window.location.href = "https://shopify.com/66867757220/account";
  };

  return (
    <div className="fixed right-10 bottom-10 z-10">
      <button is="party-button" onClick={onTrigger}>
        <span class="visually-hidden">Start the party!</span>
      </button>
      {showQuickEntry && (
        <div className="bg-cyan-500 shadow-lg overflow-hidden shadow-cyan-500/50 relative flex flex-col justify-between rounded-lg bgWhiteClass">
          {/* 未登录 */}
          {!isLogin && (
            <div className="flex flex-col gap-10 w-96 p-10">
              <p className="text-slate-100">
                We are thrilled to be able offer a reward program that shows our
                customers what they mean to us! Join today to earn points and
                redeem them at checkout!
              </p>
              <button
                onClick={onLogin}
                className={`themeColorBgClass py-2 px-6 rounded-full text-white`}
              >
                SIGN IN
              </button>
            </div>
          )}

          {/* 登录后 */}
          {isLogin && (
            <div className="flex flex-col justify-between rounded-lg">
              <div className="px-4 items-center h-36 flex flex-row justify-between  bg-center bg-cover bg-[url('https://shuyun.com/wp-content/themes/shuyun/statics/dist/img/index/index_yx_solution_hd_item.png')]">
                <span className="textWhiteClass text-xl font-semibold">
                  welcome shuyun loyalty
                </span>
                <img
                  className="absolute top-0 -right-20 w-60 h-60"
                  src="https://shuyun.com/wp-content/uploads/2023/03/2023032009452576.png"
                  alt=""
                />
              </div>

              <div className="z-10 p-6 rounded-lg bgWhiteClass w-96 -mt-2">
                {!selectedInfo && (
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-row gap-1 justify-center">
                      <span className="text-lg	font-semibold">
                        Your current points:
                      </span>
                      <span
                        className={`text-lg font-semibold themeColorTextClass`}
                      >
                        {points}
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
                            updateOpint={updateOpint}
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
      )}
    </div>
  );
});
