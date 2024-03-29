import styles from "./page.module.scss";
import WalletBalance from "./_components/WalletBalance/WalletBalance";
import CreateChange from "./_components/CreateChange/CreateChange";

const FinancePage = () => {
  return (
    <div className={styles.pageContainer}>
      <WalletBalance />
      <CreateChange />
    </div>
  );
};

export default FinancePage;
