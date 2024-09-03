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
  },
];
