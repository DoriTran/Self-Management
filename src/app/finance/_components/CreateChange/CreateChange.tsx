"use client";

import { ApCard, ApInput } from "@/components";
import { useState } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./CreateChange.module.scss";
import BalanceSelection from "./BalanceSelection/BalanceSelection";
import TagSelection from "./TagSelection/TagSelection";
import { TagSelected } from "./TagSelection/data/tagType";

const CreateChange = () => {
  const [changes, setChanges] = useState<number>(-12345);
  const [balance, setBalance] = useState<string>("credit");
  const [tags, setTags] = useState<TagSelected[]>([]);
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
          <BalanceSelection balance={balance} setBalance={setBalance} />
          <TagSelection tags={tags} setTags={setTags} />
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
