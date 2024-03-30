"use client";

import { ApScrollbar } from "@/components";
import TotalBalance from "./TotalBalance/TotalBalance";

const dummyBalances = {
  credit: "100.000",
  cash: "2.000",
  momo: "18.500",
  shopee: "100",
  other: "1500",
};

const WalletBalance = () => {
  // Height of the page - navbar - margin - inner margin
  return (
    <ApScrollbar hidden maxHeight="calc(100vh - 70px - 35px - 5px)">
      <TotalBalance />
      {Object.entries(dummyBalances).map(([key, value]) => (
        <div key={key}>
          <span>{key}: </span>
          <span>{value}</span>
        </div>
      ))}
    </ApScrollbar>
  );
};

export default WalletBalance;
