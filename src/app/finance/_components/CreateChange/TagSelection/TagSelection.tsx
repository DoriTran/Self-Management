import { FC } from "react";
import styles from "./TagSelection.module.scss";
import { TagSelected } from "./data/tagType";
import SelectedTag from "./SelectedTag/SelectedTag";
import PlusTag from "./PlusTag/PlusTag";

interface TagSelectionProps {
  tags: TagSelected[];
  setTags: React.Dispatch<React.SetStateAction<TagSelected[]>>;
}

const TagSelection: FC<TagSelectionProps> = ({ tags, setTags }) => {
  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <SelectedTag key={tag.tag} tag={tag} setTags={setTags} />
      ))}
      <PlusTag tags={tags} setTags={setTags} />
    </div>
  );
};

export default TagSelection;
