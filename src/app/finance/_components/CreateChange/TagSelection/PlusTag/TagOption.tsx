import { FC } from "react";
import { ApChip, ApDivider } from "@/components";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { TagData, TagSelected } from "@/data/tag";
import styles from "./PlusTag.module.scss";

interface TagOptionProps {
  tag: TagData;
  setTags: React.Dispatch<React.SetStateAction<TagSelected[]>>;
}

const TagOption: FC<TagOptionProps> = ({ tag, setTags }) => {
  return (
    <div className={styles.container}>
      <ApChip
        small
        label={tag.tag}
        color={tag.color}
        width="110px"
        onClick={() => setTags((prevTag: TagSelected[]) => [...prevTag, { tag: tag.tag }])}
        {...(tag.subTags && { endIcons: { icons: [faCaretRight] } })}
      />
      {tag.subTags && <ApDivider vertical />}
      {tag.subTags?.map((subTag: string) => (
        <ApChip
          filled
          small
          key={subTag}
          label={subTag}
          color={tag.color}
          onClick={() => setTags((prevTag: TagSelected[]) => [...prevTag, { tag: tag.tag, subTag }])}
        />
      ))}
    </div>
  );
};

export default TagOption;
