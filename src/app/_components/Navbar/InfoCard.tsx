import { ApAvatar } from "@/components";
import styles from "./Navbar.module.scss";

const InfoCard = () => {
  return (
    <div className={styles.infoCardWrapper}>
      <div className={styles.infoCard}>
        <div className={styles.name}>Alice</div>
        <div className={styles.email}>alice@gmail.com</div>
      </div>
      <ApAvatar alt="Alice" src="/avatar.png" size={55} border="2px solid #fff" />
    </div>
  );
};

export default InfoCard;
