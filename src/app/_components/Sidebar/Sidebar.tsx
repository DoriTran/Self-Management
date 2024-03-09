"use client";

import { ApAvatar } from "@/components";
import { FC } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "./Sidebar.module.scss";
import SideTab from "./SideTab";
import tabs from "./tabs";
import SideAction from "./SideAction";

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ isExpanded, setIsExpanded }) => {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        styles.sidebarWrapper,
        { [styles.sidebarExpanded]: isExpanded },
        { [styles.sidebarCollapsed]: !isExpanded },
      )}
    >
      <div className={styles.topSidebarContainer}>
        <div
          className={clsx(
            styles.logo,
            { [styles.logoExpanded]: isExpanded },
            { [styles.logoCollapsed]: !isExpanded },
          )}
        >
          <ApAvatar alt="Self" size={45} src="/icon.png" onClick={() => setIsExpanded(!isExpanded)} />
        </div>
        <div className={styles.sideTabsWrapper}>
          {Object.entries(tabs).map(([, eachTab]) => (
            <SideTab
              key={eachTab.path}
              tab={eachTab}
              selected={pathname.startsWith(eachTab.path)}
              expanded={isExpanded}
            />
          ))}
        </div>
      </div>
      <div className={styles.botSidebarContainer}>
        <SideAction icon={faRightFromBracket} onClick={() => console.log("Open logout modal!")} />
      </div>
    </div>
  );
};

export default Sidebar;
