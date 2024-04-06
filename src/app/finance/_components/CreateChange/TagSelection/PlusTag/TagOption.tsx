import { FC } from "react";
import { ApChip, ApDivider } from "@/components";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./PlusTag.module.scss";
import { TagData, TagSelected } from "../data/tagType";

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
        width="100px"
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
