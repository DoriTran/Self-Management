import { ApCard, ApDivider, ApIcon } from "@/components";
import { themes } from "@/utils/themes";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import styles from "./WalletBalance.module.scss";
import pageStyles from "../../page.module.scss";

const WalletBalance = () => {
  return (
    <ApCard className={styles.totalBlance} elevation={3}>
      <ApCard className={styles.totalBlanceWrapper}>
        <div className={styles.totalIconWrapper}>
          <ApIcon icon={faWallet} color={themes.color.primaryDark} size={85} />
        </div>
        <div className={styles.totalBlanceText}>Total balance</div>
        <div className={styles.totalBlanceNumber}>12.000</div>
      </ApCard>
      <div className={styles.dailyChangeWrapper}>
        <div className={styles.todayChangesText}>Today changes</div>
        <div className={styles.todayChangesNumber}>
          <div className={clsx(pageStyles.number, pageStyles.downNumber)}>-580</div>
          <ApDivider vertical thickness={4} variant="middle" flexItem />
          <div className={clsx(pageStyles.number, pageStyles.upNumber)}>+580</div>
        </div>
      </div>
    </ApCard>
  );
};

export default WalletBalance;
