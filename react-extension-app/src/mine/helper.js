import { giftIcon, sparklesIcon, currencyDollarIcon } from "../common/icon";

export const listData = [
  {
    name: "My rewards",
    icon: giftIcon,
    key: "rewards",
    subListData: [
      {
        name: "H4IKPPFS",
        tips: "GET $10 OFF",
        icon: [currencyDollarIcon],
        key: 1,
        butText: "use it now",
        point: 10,
        navLink: "/collections/all",
      },
      {
        name: "JKLKPPFS",
        tips: "GET $20 OFF",
        icon: [currencyDollarIcon],
        key: 2,
        butText: "use it now",
        point: 10,
        navLink: "/collections/all",
      },
    ],
  },
  {
    name: "My balance",
    icon: sparklesIcon,
    key: "balance",
    subListData: [
      {
        name: "Date",
        tips: "Actions",
        key: 1,
        isCutOpint: true,
        point: "Points",
      },
      {
        name: "5 September 2024",
        tips: "GET $50 OFF",
        key: 2,
        isCutOpint: true,
        point: -200,
      },
      {
        name: "5 September 2024",
        tips: "Complete an order",
        key: 3,
        point: 10,
      },
      {
        name: "5 September 2024",
        tips: "Like on Facebook",
        key: 4,
        point: 50,
      },
    ],
  },
];
