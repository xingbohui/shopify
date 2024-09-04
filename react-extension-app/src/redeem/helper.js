import { currencyDollarIcon, yenIcon } from "../common/icon";
import successImag from "../common/image/success.jpg";
import failImag from "../common/image/fail.jpg";
import "../index.css";

export const listData = [
  {
    name: "Free product",
    tips: "10000 points",
    icon: [currencyDollarIcon],
    isLackPoint: true,
    key: 1,
    butText: "Redeem",
    subListdata: [
      {
        name: "sorry",
        tips: "Insufficient points, place an order to earn points",
        code: "",
        // icon: [checkIcon],
        image: failImag,
        key: 1,
        butText: "Purchase",
        type: "nav",
        point: 10,
        navLink: "/collections/all",
      },
    ],
  },
  {
    name: "GET ￥50 OFF",
    tips: "200 points",
    icon: [yenIcon],
    key: 2,
    butText: "Redeem",
    isCutOpint: true,
    point: 200,
    subListdata: [
      {
        name: "success",
        tips: "Use the redemption code to place an order for deduction",
        code: "EPB01",
        // icon: [checkIcon],
        image: successImag,
        key: 1,
        butText: "Purchase",
        type: "nav",
        point: 10,
        navLink: "/collections/all",
      },
    ],
  },
  {
    name: "GET $20 OFF",
    tips: "10 points",
    icon: [currencyDollarIcon],
    key: 3,
    disable: true,
    butText: "Redeem",
  },
  {
    name: "Free shipping coupon",
    tips: "200 points",
    icon: [currencyDollarIcon],
    key: 4,
    disable: true,
    butText: "Redeem",
  },
];

export const titleInfoData = {
  title: "Redeem points",
  tips: "Spend your points on any of the amazing rewards below. Apply your discount code at checkout to claim your reward.",
};
