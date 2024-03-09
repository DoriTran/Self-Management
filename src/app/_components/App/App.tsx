"use client";

import { useState } from "react";
import clsx from "clsx";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./App.module.scss";

const App = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div
        className={clsx(
          styles.mainContainer,
          { [styles.expandedContainer]: isExpanded },
          { [styles.collapsedContainer]: !isExpanded },
        )}
      >
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default App;
