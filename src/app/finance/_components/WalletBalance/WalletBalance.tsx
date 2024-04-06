"use client";

import { ApScrollbar } from "@/components";
import TotalBalance from "./TotalBalance/TotalBalance";
import { dummyBalances } from "../../page";
import styles from "./WalletBalance.module.scss";

const WalletBalance = () => {
  // Height of the page - navbar - margin - inner margin
  return (
    <ApScrollbar
      hidden
      maxHeight="calc(100vh - 70px - 35px - 5px)"
      className={styles.walletBalanceScrollContainer}
    >
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
