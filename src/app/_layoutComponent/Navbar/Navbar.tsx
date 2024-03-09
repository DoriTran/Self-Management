"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { capitalizeFirstLetter } from "@/utils/capitalize";
import { sliceTo } from "@/utils/slice";
import { ApIcon } from "@/components";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import InfoCard from "./InfoCard";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const pathname = usePathname();
  const navbarTitle = useMemo(() => capitalizeFirstLetter(sliceTo(pathname, 1, "/")), [pathname]);

  return (
    <div className={styles.navbarWrapper}>
      {navbarTitle}
      <div className={styles.infoWrapper}>
        <ApIcon icon={faBell} size={30} color="primaryDark" />
        <InfoCard />
      </div>
    </div>
  );
};

export default Navbar;
