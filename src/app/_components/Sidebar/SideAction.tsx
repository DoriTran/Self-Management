import { ApIcon } from "@/components";
import { themes } from "@/utils/themes";
import { FC } from "react";
import styles from "./Sidebar.module.scss";

interface SideActionProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  icon: any;
}

const SideAction: FC<SideActionProps> = ({ icon, onClick }) => {
  return (
    <div className={styles.action} onClick={onClick}>
      <ApIcon icon={icon} size={27} color={themes.color.priBlackLight} fixedWidth />
    </div>
  );
};

export default SideAction;
