import {
  faCalendarCheck,
  faCoins,
  faDumbbell,
  faGear,
  faHouse,
  faUtensils,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";

export interface Tab {
  icon: any;
  path: string;
  title: string;
}

const tabs: { [key: string]: Tab } = {
  dashboard: {
    icon: faHouse,
    path: "/dashboard",
    title: "Dashboard",
  },
  finance: {
    icon: faCoins,
    path: "/finance",
    title: "Finance Management",
  },
  expense: {
    icon: faCalendarCheck,
    path: "/expense",
    title: "Expense Tracking",
  },
  weight: {
    icon: faWeightScale,
    path: "/weight",
    title: "Weight Monitoring",
  },
  diet: {
    icon: faUtensils,
    path: "/diet",
    title: "Diet Control",
  },
  exercise: {
    icon: faDumbbell,
    path: "/exercise",
    title: "Settings",
  },
  settings: {
    icon: faGear,
    path: "/settings",
    title: "Dashboard",
  },
};

export default tabs;
