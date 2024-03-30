/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { ApCard, ApInput } from "@/components";
import { useState } from "react";
import ApChip from "@/components/ApChip/ApChip";
import { faPlay, faStar, faTree } from "@fortawesome/free-solid-svg-icons";
import TestInput from "@/components/ApInput/TestInput";
import styles from "./CreateChange.module.scss";

const CreateChange = () => {
  const [changes, setChanges] = useState<number>(-12345);
  const [notes, setNotes] = useState<string>("abcdef");

  return (
    <ApCard className={styles.createChange} elevation={3}>
      <div className={styles.createWrapper}>
        <div className={styles.changeText}>Change</div>
        <ApInput
          value={changes}
          setValue={setChanges}
          type="number"
          isCorrect={changes > 0}
          isError={changes < 0}
          height={40}
          width={150}
          align="center"
        />
      </div>
      {/* <div className={styles.noteWrapper}>
        <div className={styles.infoWrapper}>Credit and plus chip</div>
        <ApInput
          value={notes}
          setValue={setNotes}
          placeholder="What cause this changes . . ?"
          height={40}
          width="calc(100% - 22px)"
          endAdornment={{ icon: faPlay, onClick: () => console.log("New Changes") }}
        />
      </div> */}
      <TestInput />
    </ApCard>
  );
};

export default CreateChange;
