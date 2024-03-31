/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { ApChip } from "@/components";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";
import TestChip from "@/components/ApChip/TestChip";
import styles from "./BalanceSelection.module.scss";

interface BalanceSelectionProps {
  balance: string;
  setBalance: React.Dispatch<React.SetStateAction<string>>;
}

const BalanceSelection: FC<BalanceSelectionProps> = ({ balance, setBalance }) => {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);

  return (
    <div className={styles.selectionWrapper}>
      <ApChip endIcons={{ icons: [faCaretDown] }} onClick={() => setIsSelecting(true)} />
    </div>
  );
};

export default BalanceSelection;
