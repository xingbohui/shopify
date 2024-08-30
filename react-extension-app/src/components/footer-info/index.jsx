import React from "react";
import {
  themeColor600BgClass,
  textWhiteClass,
} from "../../common/style/theme-color";

export const FooterInfo = () => {
  return (
    <div
      className={`flex flex-col items-center gap-3 bg-green-600 p-10 ${themeColor600BgClass}`}
    >
      <span className={`text-xs	font-semibold ${textWhiteClass}`}>
        © 2024, SHUYUN Loyalty Store (Password: shunyunloyalty) Powered by
        Shopify
      </span>
    </div>
  );
};
