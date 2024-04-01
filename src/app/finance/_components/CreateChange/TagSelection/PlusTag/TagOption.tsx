import { FC } from "react";
import { ApChip, ApDivider } from "@/components";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { TagData } from "../data/defaultTags";
import styles from "./PlusTag.module.scss";

interface TagOptionProps {
  tag: TagData;
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

const TagOption: FC<TagOptionProps> = ({ tag, setTags }) => {
  return (
    <div className={styles.container}>
      <ApChip
        label={tag.tag}
        color={tag.color}
        width="200px"
        {...(tag.subTags && { endIcons: { icons: [faCaretRight] } })}
      />
      {tag.subTags && <ApDivider vertical />}
      {tag.subTags?.map((subTag: string) => <ApChip key={subTag} label={subTag} color={tag.color} />)}
    </div>
  );
};

export default TagOption;
