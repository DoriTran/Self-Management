"use client";

import { ApCard, ApInput } from "@/components";
import { useState } from "react";
import ApChip from "@/components/ApChip/ApChip";
import { faStar, faTree } from "@fortawesome/free-solid-svg-icons";
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
          isCorrect={changes > 0}
          isError={changes < 0}
          height={80}
          width={150}
          align="center"
        />
      </div>
      <div className={styles.noteWrapper}>
        <div className={styles.infoWrapper}>Credit and plus chip</div>
        <ApChip small filled label="label" />
        <ApChip small filled icon={{ icon: faStar }} />
        <ApChip small filled icon={{ icon: faStar }} label="icon" />
        <ApChip small filled endIcons={{ icons: [faStar] }} label="end 1 icon" />
        <ApChip small filled endIcons={{ icons: [faStar, faTree] }} label="end 2 icons" />
        <ApChip small filled hoverIcons={{ icons: [faStar] }} label="hover 1 icon" />
        <ApChip small filled hoverIcons={{ icons: [faStar, faTree] }} label="hover 2 icons" />
        <ApChip
          small
          filled
          color="green"
          icon={{ icon: faStar }}
          hoverIcons={{ icons: [faStar] }}
          label="green"
        />
        <ApChip small filled color="pink" icon={{ icon: faStar }} hoverIcons={{ icons: [faStar] }} label="pink" />
        <ApChip
          small
          filled
          color="purple"
          icon={{ icon: faStar }}
          hoverIcons={{ icons: [faStar] }}
          label="purple"
        />
        <ApChip small filled color="red" icon={{ icon: faStar }} hoverIcons={{ icons: [faStar] }} label="red" />
        <ApChip
          small
          filled
          color="orange"
          icon={{ icon: faStar }}
          hoverIcons={{ icons: [faStar] }}
          label="orange"
        />
        <ApChip
          small
          filled
          color="yellow"
          icon={{ icon: faStar }}
          hoverIcons={{ icons: [faStar] }}
          label="yellow"
        />
        <ApChip small filled color="blue" icon={{ icon: faStar }} hoverIcons={{ icons: [faStar] }} label="blue" />
        <ApChip
          small
          filled
          color="black"
          icon={{ icon: faStar }}
          hoverIcons={{ icons: [faStar] }}
          label="black"
        />

        <ApInput value={notes} setValue={setNotes} />
      </div>
    </ApCard>
  );
};

export default CreateChange;
