"use client";

import { FC, useMemo, useRef } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import useWindowSizeEffect from "@/hooks/useWindowSizeEffect";
import SideTab from "./_components/SideTab/SideTab";
import tabs from "./SideTab.type";
import { Indicator, LogoToggle } from "./_components";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ isExpanded, setIsExpanded }) => {
  const pathname = usePathname();
  const tabsArray = useMemo(() => Object.entries(tabs), []);
  const selectedIndex = useMemo(() => {
    return tabsArray.findIndex(([, value]) => value.path === pathname);
  }, [tabsArray, pathname]);

  const sideTabsWrapperRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const topPosition = useWindowSizeEffect(() => {
    const firstChild = sideTabsWrapperRef.current?.children[0] as HTMLElement;
    console.log(firstChild.offsetTop);
    return firstChild.offsetTop;
  });

  return (
    <div className={clsx(styles.sidebar, { [styles.notExpanded]: !isExpanded })}>
      <LogoToggle isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className={styles.mainAction}>
        <Indicator selectedIndex={selectedIndex} position={topPosition} />
        <div className={styles.sideTabsWrapper} ref={sideTabsWrapperRef}>
          {tabsArray.map(([, eachTab]) => (
            <SideTab
              key={eachTab.path}
              tab={eachTab}
              selected={pathname.startsWith(eachTab.path)}
              expanded={isExpanded}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
