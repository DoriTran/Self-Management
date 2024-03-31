/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { ApCard, ApInput } from "@/components";
import { useState } from "react";
import ApChip from "@/components/ApChip/ApChip";
import { faPlay, faStar, faTree } from "@fortawesome/free-solid-svg-icons";
import TestChip from "@/components/ApChip/TestChip";
import styles from "./CreateChange.module.scss";

const CreateChange = () => {
  const [changes, setChanges] = useState<number>(-12345);
  const [balance, setBalance] = useState<string>("credit");
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
      <div className={styles.noteWrapper}>
        <div className={styles.infoWrapper}>
          <TestChip />
        </div>
        <ApInput
          value={notes}
          setValue={setNotes}
          placeholder="What cause this changes . . ?"
          height={40}
          width="100%"
          endAdornment={{ icon: faPlay, onClick: () => setNotes("") }}
        />
      </div>
    </ApCard>
  );
};

export default CreateChange;
