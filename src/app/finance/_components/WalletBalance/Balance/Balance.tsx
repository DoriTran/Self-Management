import { ApIcon } from "@/components";
import { FC, useState } from "react";
import { IconData } from "@/data/icon";
import { themes } from "@/utils/themes";
import styles from "./Balance.module.scss";

interface BalanceProps {
  icon: any;
  dcon: IconData | undefined;
  type: string;
  amount: number;
  change: string | undefined;
}

const Balance: FC<BalanceProps> = ({ icon, dcon, type, amount, change }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => change && setIsHovered(true);
  const handleLeave = () => change && setTimeout(() => setIsHovered(false), 1000);

  return (
    <div className={styles.container} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <div className={styles.holder}>
        <div className={styles.innerHolder}>
          <ApIcon icon={icon} dcon={dcon} color={themes.color.priWhite} size={22} />
        </div>
      </div>
      <div className={styles.balance} style={{ width: isHovered ? "50%" : "calc(100% - 45px)" }}>
        <div className={styles.type}>{type}</div>
        <div className={styles.amount}>{amount}</div>
      </div>
      <div className={styles.change}>{change || ""}</div>
    </div>
  );
};

export default Balance;
