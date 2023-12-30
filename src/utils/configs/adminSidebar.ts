import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";

export const sideBarConfig = [
  {
    heading: "Dashboard",
    items: [
      {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: RiDashboardFill,
      },
      {
        name: "Product",
        path: "/admin/product",
        icon: RiShoppingBag3Fill,
      },
      {
        name: "Customer",
        path: "/admin/customer",
        icon: IoIosPeople,
      },
      {
        name: "Transaction",
        path: "/admin/transaction",
        icon: AiFillFileText,
      },
    ],
  },
  {
    heading: "Charts",
    items: [
      {
        name: "Bar",
        path: "/admin/chart/bar",
        icon: FaChartBar,
      },
      {
        name: "Pie",
        path: "/admin/chart/pie",
        icon: FaChartPie,
      },
      {
        name: "Line",
        path: "/admin/chart/line",
        icon: FaChartLine,
      },
    ],
  },
  {
    heading: "Apps",
    items: [
      {
        name: "Stopwatch",
        path: "/admin/app/stopwatch",
        icon: FaStopwatch,
      },
      {
        name: "Coupon",
        path: "/admin/app/coupon",
        icon: RiCoupon3Fill,
      },
      {
        name: "Toss",
        path: "/admin/app/toss",
        icon: FaGamepad,
      },
    ],
  },
];
