"use client";

import { ApChip, ApFlyout } from "@/components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FC, useMemo, useState } from "react";
import { defaultTags, TagData, TagSelected } from "@/data/tag";
import TagOption from "./TagOption";

interface PlusTagProps {
  tags: TagSelected[];
  setTags: React.Dispatch<React.SetStateAction<TagSelected[]>>;
}

const PlusTag: FC<PlusTagProps> = ({ tags, setTags }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const availableTags = useMemo<TagData[]>(() => {
    const addedTags = tags.map((eachTag: TagSelected) => eachTag.tag);
    return defaultTags.filter((eachDefaultTag: TagData) => !addedTags.includes(eachDefaultTag.tag));
  }, [tags]);

  if (availableTags.length === 0) return null;
  return (
    <ApFlyout
      anchor={<ApChip icon={{ icon: faPlus }} />}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      style={{
        children: {
          display: "flex",
          flexDirection: "column",
          gap: 5,
          padding: "10px 5px",
        },
      }}
    >
      {availableTags.map((eachAvailableTag: TagData) => (
        <TagOption key={eachAvailableTag.tag} tag={eachAvailableTag} setTags={setTags} />
      ))}
    </ApFlyout>
  );
};

export default PlusTag;
