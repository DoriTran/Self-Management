/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApIcon } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.scss";
import WalletBalance from "./_components/WalletBalance/WalletBalance";
import CreateChange from "./_components/CreateChange/CreateChange";

export const dummyBalances = {
  credit: "100.000",
  cash: "2.000",
  momo: "18.500",
  shopee: "100",
  other: "1500",
};

const FinancePage = () => {
  return (
    <div className={styles.pageContainer}>
      <WalletBalance />
      <CreateChange />
      <ApIcon dcon={{ type: "solid", name: "faStar" }} />
    </div>
  );
};

export default FinancePage;
