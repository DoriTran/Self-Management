import { faCreditCard, faMoneyBillWave, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { IconData } from "../icon";

export interface BalanceType {
  name: string;
  icon?: any;
  data?: IconData;
  amount?: number;
}

export const defaultBalance: BalanceType[] = [
  { name: "Credit", icon: faCreditCard },
  { name: "Cash", icon: faMoneyBillWave },
  { name: "Other", icon: faSackDollar },
];
