"use client";

import { ApScrollbar } from "@/components";
import { dummyBalance } from "@/data/balance/dummy";
import TotalBalance from "./TotalBalance/TotalBalance";
import styles from "./WalletBalance.module.scss";
import Balance from "./Balance/Balance";

const WalletBalance = () => {
  // Height of the page - navbar - margin - inner margin
  return (
    <ApScrollbar
      hidden
      maxHeight="calc(100vh - 70px - 35px - 5px)"
      className={styles.walletBalanceScrollContainer}
    >
      <TotalBalance />
      <div className={styles.balances}>
        {dummyBalance.map((balance, index) => (
          <Balance
            key={index}
            icon={balance.icon}
            dcon={balance.data}
            type={balance.name}
            amount={balance.amount || 0}
          />
        ))}
      </div>
    </ApScrollbar>
  );
};

export default WalletBalance;
