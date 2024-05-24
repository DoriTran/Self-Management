import { FC } from "react";
import clsx from "clsx";
import { ApAvatar } from "@/components";
import { LogoToggleProps } from "./LogoToggle.type";
import styles from "./LogoToggle.module.scss";

const LogoToggle: FC<LogoToggleProps> = ({ isExpanded, setIsExpanded }) => {
  return (
    <div
      className={clsx(styles.logo, { [styles.logoExpanded]: isExpanded }, { [styles.logoCollapsed]: !isExpanded })}
    >
      <ApAvatar alt="Self" size={45} src="/icon.png" onClick={() => setIsExpanded(!isExpanded)} />
    </div>
  );
};

export default LogoToggle;
