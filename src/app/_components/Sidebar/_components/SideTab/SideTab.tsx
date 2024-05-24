import clsx from "clsx";
import { themes } from "@/utils/themes";
import { ApIcon } from "@/components";
import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "./SideTab.module.scss";
import { SideTabProps } from "./SideTab.type";

const SideTab: FC<SideTabProps> = ({ tab, selected }) => {
  const router = useRouter();

  return (
    <div className={styles.tab} onClick={() => router.push(tab.path)}>
      <div className={clsx(styles.tabTitle, { [styles.tabTitleSelected]: selected })}>{tab.title}</div>
      <div className={clsx(styles.icon, { [styles.iconSelected]: selected })}>
        <ApIcon
          icon={tab.icon}
          size={25}
          color={selected ? themes.color.primaryDark : themes.color.primaryLight}
          fixedWidth
        />
      </div>
    </div>
  );
};

export default SideTab;
