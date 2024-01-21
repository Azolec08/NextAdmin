import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";

import { IoMdLogOut } from "react-icons/io";

export const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icons: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icons: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icons: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icons: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analystics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icons: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icons: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icons: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icons: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icons: <MdHelpCenter />,
      },
    ],
  },
];
