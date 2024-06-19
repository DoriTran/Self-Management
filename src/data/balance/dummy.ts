/* eslint-disable @typescript-eslint/no-unused-vars */
import { faCreditCard, faMoneyBillWave, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { BalanceType } from ".";

export const dummyBalance: BalanceType[] = [
  { name: "Credit", icon: faCreditCard, amount: 100000 },
  { name: "Cash", icon: faMoneyBillWave, amount: 2000 },
  { name: "Momo", data: { type: "solid", name: "faCoins" }, amount: 18500 },
  // { name: "Shopee", data: { type: "solid", name: "faReceipt" }, amount: 100 },
  // { name: "Other", icon: faSackDollar, amount: 1500 },
];
