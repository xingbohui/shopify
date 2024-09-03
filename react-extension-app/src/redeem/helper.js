import { currencyDollarIcon, checkIcon } from "../common/icon";
import "../index.css";

export const listData = [
  {
    name: "Free product",
    tips: "Earn 10 points for every 1USD",
    icon: [currencyDollarIcon],
    key: 1,
    butText: "Redeem",
  },
  {
    name: "GET $50 OFF",
    tips: "200 points",
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
        icon: [checkIcon],
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
    tips: "Earn 10 points for every 1USD",
    icon: [currencyDollarIcon],
    key: 3,
    butText: "Redeem",
  },
  {
    name: "Free shipping coupon",
    tips: "200 points",
    icon: [currencyDollarIcon],
    key: 4,
    butText: "Redeem",
  },
];

export const titleInfoData = {
  title: "Redeem points",
  tips: "Spend your points on any of the amazing rewards below. Apply your discount code at checkout to claim your reward.",
};
