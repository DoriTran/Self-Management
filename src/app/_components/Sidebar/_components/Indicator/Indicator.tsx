import { FC, useMemo } from "react";
import { IndicatorProps } from "./Indicator.type";
import styles from "./Indicator.module.scss";

const SIDE_BAR_GAP = 15;
const TAB_HEIGHT = 60;

const Indicator: FC<IndicatorProps> = ({ selectedIndex, position, isExpanded }) => {
  const currentTopPosition = useMemo<number>(
    () => position + selectedIndex * (SIDE_BAR_GAP + TAB_HEIGHT),
    [selectedIndex, position],
  );

  return (
    <>
      <div className={styles.indicator} style={{ top: `${currentTopPosition}px` }} />
      <div className={styles.circle} style={{ top: `${currentTopPosition + 6}px` }} />
      <div className={styles.title} style={{ top: `${currentTopPosition}px`, width: isExpanded ? "100%" : 0 }} />
    </>
  );
};

export default Indicator;
