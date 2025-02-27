import { giftIcon, sparklesIcon, shareIcon } from "../common/icon";

export const listData = [
  {
    name: "Complete an order",
    tips: "Earn 10 points",
    icon: [giftIcon],
    key: 1,
    butText: "Purchase",
    type: "nav",
    point: 10,
    navLink: "/collections/all",
  },
  {
    name: "Happy birthday",
    tips: "Earn 200 points",
    icon: [sparklesIcon],
    key: 2,
    point: 200,
    butText: "Enter info",
  },
  {
    name: "Share on Facebook",
    tips: "Earn 50 points",
    icon: [shareIcon],
    key: 3,
    point: 50,
    butText: "Take me there",
    type: "open",
    navLink:
      "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F190036098345",
  },
  {
    name: "Happy birthday",
    tips: "Earn 200 points",
    icon: [giftIcon],
    key: 4,
    point: 200,
    butText: "Enter info",
  },
  {
    name: "Complete an order",
    tips: "Earn 10 points",
    icon: [giftIcon],
    key: 5,
    butText: "Purchase",
  },
  {
    name: "Happy birthday",
    tips: "200 points",
    icon: [sparklesIcon],
    key: 6,
    butText: "Enter info",
  },
  {
    name: "Complete an order",
    tips: "Earn 10 points",
    icon: [giftIcon],
    key: 7,
    butText: "Purchase",
  },
  {
    name: "Happy birthday",
    tips: "Earn 200 points",
    icon: [sparklesIcon],
    key: 8,
    butText: "Enter info",
  },
];

export const titleInfoData = {
  title: "Earn points",
  tips: "You can earn points for every dollar you spend on our website. Earn even more points by completing the actions below.",
};
