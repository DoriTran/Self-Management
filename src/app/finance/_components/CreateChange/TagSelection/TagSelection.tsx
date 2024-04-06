import { FC } from "react";
import { TagSelected } from "./data/tagType";
import SelectedTag from "./SelectedTag/SelectedTag";
import PlusTag from "./PlusTag/PlusTag";

interface TagSelectionProps {
  tags: TagSelected[];
  setTags: React.Dispatch<React.SetStateAction<TagSelected[]>>;
}

const TagSelection: FC<TagSelectionProps> = ({ tags, setTags }) => {
  return (
    <>
      {tags.map((tag) => (
        <SelectedTag key={tag.tag} tag={tag} setTags={setTags} />
      ))}
      <PlusTag tags={tags} setTags={setTags} />
    </>
  );
};

export default TagSelection;
