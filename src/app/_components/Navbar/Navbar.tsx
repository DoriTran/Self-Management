"use client";

import { ApIcon } from "@/components";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import tabs from "@/app/_components/Sidebar/tabs";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { sliceTo } from "@/utils/slice";
import InfoCard from "./InfoCard";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const pathname = usePathname();
  const navbarTitle = useMemo<string>((): string => {
    const mainPath = sliceTo(pathname, 1, "/");
    return tabs[mainPath]?.title || "Not found";
  }, [pathname]);

  return (
    <div className={styles.navbarWrapper}>
      {navbarTitle}
      <div className={styles.infoWrapper}>
        <ApIcon icon={faBell} size={35} color="primaryDark" />
        <InfoCard />
      </div>
    </div>
  );
};

export default Navbar;
