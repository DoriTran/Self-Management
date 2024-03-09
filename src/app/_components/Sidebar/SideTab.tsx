import clsx from "clsx";
import { themes } from "@/utils/themes";
import { ApIcon } from "@/components";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Tab } from "./tabs";
import styles from "./Sidebar.module.scss";

interface SideTabProps {
  tab: Tab;
  selected: boolean;
  expanded: boolean;
}

const SideTab: FC<SideTabProps> = ({ tab, selected, expanded }) => {
  const router = useRouter();

  return (
    <div
      className={clsx(styles.tab, { [styles.tabSelected]: selected })}
      onClick={() => router.push(tab.path)}
    >
      {selected && <div className={styles.selectedGum} />}
      <div
        className={clsx(
          styles.decorator,
          { [styles.notSelectedDecorator]: !selected },
          { [styles.expandedDecorator]: selected && expanded },
          { [styles.unexpandedDecorator]: selected && !expanded },
        )}
      />
      <div className={styles.tabContent}>
        <ApIcon
          icon={tab.icon}
          size={27}
          color={selected ? themes.color.primaryDark : themes.color.priBlackLight}
          fixedWidth
        />
        <div className={clsx(styles.tabTitle, { [styles.tabTitleSelected]: selected })}>{tab.title}</div>
      </div>
    </div>
  );
};

export default SideTab;
