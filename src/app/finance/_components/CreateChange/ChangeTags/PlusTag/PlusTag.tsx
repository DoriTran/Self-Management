"use client";

import { ApChip, ApFlyout } from "@/components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";

interface PlusTagProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const PlusTag: FC<PlusTagProps> = ({ tags, setTags }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <ApFlyout anchor={<ApChip icon={{ icon: faPlus }} />} />;
};

export default PlusTag;
