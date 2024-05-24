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
    title: "Finance",
  },
  expense: {
    icon: faCalendarCheck,
    path: "/expense",
    title: "Expense",
  },
  weight: {
    icon: faWeightScale,
    path: "/weight",
    title: "Weight",
  },
  diet: {
    icon: faUtensils,
    path: "/diet",
    title: "Diet",
  },
  exercise: {
    icon: faDumbbell,
    path: "/exercise",
    title: "Exercise",
  },
  settings: {
    icon: faGear,
    path: "/settings",
    title: "Settings",
  },
};

export default tabs;
