"use client";

import { ApCard, ApDivider, ApIcon } from "@/components";
import clsx from "clsx";
import { faArrowTrendDown, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { themes } from "@/utils/themes";
import styles from "./TotalBalance.module.scss";
import pageStyles from "../../../page.module.scss";

const TotalBalance = () => {
  return (
    <ApCard className={styles.balanceCard} elevation={3}>
      <div className={styles.totalBalance}>
        <div className={styles.description}>Balance</div>
        <div className={styles.balance}>9.121.000</div>
      </div>
      {true && (
        <div className={styles.dailyChange}>
          <div className={styles.todayChangesText}>Today</div>
          <div className={styles.todayChangesNumber}>
            <div className={clsx(pageStyles.number, pageStyles.downNumber)}>
              <ApIcon icon={faArrowTrendDown} color={themes.color.priRed} /> 580
            </div>
            <ApDivider vertical thickness={4} variant="middle" flexItem />
            <div className={clsx(pageStyles.number, pageStyles.upNumber)}>
              <ApIcon icon={faArrowTrendUp} color={themes.color.priGreen} /> 580
            </div>
          </div>
        </div>
      )}
    </ApCard>
  );
};

export default TotalBalance;
