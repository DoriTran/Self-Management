import { FC, useMemo } from "react";
import { ApChip } from "@/components";
import { faCircleXmark as faCircleXmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark as faCircleXmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { defaultTags, TagSelected } from "@/data/tag";

interface SelectedTagProps {
  tag: TagSelected;
  setTags: React.Dispatch<React.SetStateAction<TagSelected[]>>;
}

const SelectedTag: FC<SelectedTagProps> = ({ tag, setTags }) => {
  const tagProps = useMemo<{ color: string | undefined; label: string }>(() => {
    return {
      color: defaultTags.find((eachDefaultTag) => eachDefaultTag.tag === tag.tag)?.color,
      label: tag.subTag ? `${tag.tag} • ${tag.subTag}` : tag.tag,
    };
  }, [tag]);

  const removeTag = () => {
    setTags((prevTags: TagSelected[]) => prevTags.filter((eachTag: TagSelected) => eachTag.tag !== tag.tag));
  };

  return (
    <ApChip
      filled
      hoverIcons={{
        icons: [faCircleXmarkRegular],
        hovers: [faCircleXmarkSolid],
        actions: [removeTag],
      }}
      {...tagProps}
    />
  );
};

export default SelectedTag;
