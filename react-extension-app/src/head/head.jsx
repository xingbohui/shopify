import React from "react";


export const Head = () => {
  return (
    <div className="p-10 flex flex-col justify-center gap-4 w-screen h-80 bg-center bg-cover bg-[url('https://shuyun.com/wp-content/themes/shuyun/statics/dist/img/footer_box.png')]">
      <span className="font-sans font-semibold text-white text-xl">
        ShuYun Loyalty
      </span>
      <p className="text-slate-100 w-96">
        Become a member of our loyalty program and gain access to exclusive
        member benefits every time you shop. Many attractive rewards are waiting
        for you!
      </p>
      <div className="flex flex-row gap-3">
        <button
          className={`bg-amber-50 py-2 px-6 rounded-full text-teal-600 themeColorTextClass`}
        >
          Earn points
        </button>
        <button
          className={` py-2 px-6 rounded-full border-white	border text-white`}
        >
          Redeem points
        </button>
      </div>
    </div>
  );
};
