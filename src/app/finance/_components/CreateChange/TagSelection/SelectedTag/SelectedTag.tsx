import { FC, useMemo } from "react";
import { ApChip } from "@/components";
import { faCircleXmark as faCircleXmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark as faCircleXmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { TagSelected } from "../data/tagType";

interface SelectedTagProps {
  tag: TagSelected;
  setTags: React.Dispatch<React.SetStateAction<TagSelected[]>>;
}

const SelectedTag: FC<SelectedTagProps> = ({ tag, setTags }) => {
  const tagLabel = useMemo<string>(() => {
    if (tag.subTag) return `${tag.tag} • ${tag.subTag}`;
    return tag.tag;
  }, [tag]);

  const removeTag = () => {
    setTags((prevTags: TagSelected[]) => prevTags.filter((eachTag: TagSelected) => eachTag.tag !== tag.tag));
  };

  return (
    <ApChip
      filled
      label={tagLabel}
      hoverIcons={{
        icons: [faCircleXmarkRegular],
        hovers: [faCircleXmarkSolid],
        actions: [removeTag],
      }}
    />
  );
};

export default SelectedTag;
