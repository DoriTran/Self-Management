"use client";

import { ApCard, ApInput } from "@/components";
import { useState } from "react";
import styles from "./CreateChange.module.scss";

const CreateChange = () => {
  const [changes, setChanges] = useState<number>(0);
  const [notes, setNotes] = useState<string>("");

  return (
    <ApCard className={styles.createChange} elevation={3}>
      <div className={styles.createWrapper}>
        <div className={styles.changeText}>Change</div>
        <ApInput label="lmao" value={changes} setValue={setChanges} />
      </div>
      <div className={styles.noteWrapper}>
        <div className={styles.infoWrapper}>Credit and plus chip</div>
        <ApInput value={notes} setValue={setNotes} />
      </div>
    </ApCard>
  );
};

export default CreateChange;
