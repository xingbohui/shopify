import { currencyDollarIcon, checkIcon } from "../common/icon";
import successImag from "../common/image/success.jpg";
import failImag from "../common/image/fail.jpg";
import "../index.css";

export const listData = [
  {
    name: "Free product",
    tips: "Earn 10000 points",
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
    name: "GET $50 OFF",
    tips: "Earn 200 points",
    icon: [currencyDollarIcon],
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
    tips: "Earn 10 points",
    icon: [currencyDollarIcon],
    key: 3,
    butText: "Redeem",
  },
  {
    name: "Free shipping coupon",
    tips: "Earn 200 points",
    icon: [currencyDollarIcon],
    key: 4,
    butText: "Redeem",
  },
];

export const titleInfoData = {
  title: "Redeem points",
  tips: "Spend your points on any of the amazing rewards below. Apply your discount code at checkout to claim your reward.",
};
