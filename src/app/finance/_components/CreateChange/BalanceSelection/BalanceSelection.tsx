/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { ApChip, ApIcon, ApMenu } from "@/components";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";
import { dummyBalance } from "@/data/balance/dummy";
import { BalanceType } from "@/data/balance";
import styles from "./BalanceSelection.module.scss";

interface BalanceSelectionProps {
  balance: string;
  setBalance: React.Dispatch<React.SetStateAction<string>>;
}

const BalanceSelection: FC<BalanceSelectionProps> = ({ balance, setBalance }) => {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);

  return (
    <ApMenu
      anchor={<ApChip label={balance} endIcons={{ icons: [faCaretDown] }} onClick={() => setIsSelecting(true)} />}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      isOpen={isSelecting}
      setIsOpen={setIsSelecting}
      options={dummyBalance.map((eachBalanceType: BalanceType) => ({
        value: eachBalanceType.name,
        label: (
          <>
            <ApIcon icon={eachBalanceType.icon} dcon={eachBalanceType.data} />
            {eachBalanceType.name}
          </>
        ),
      }))}
    />
  );
};

export default BalanceSelection;
