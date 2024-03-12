import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import { ActionIconsProps } from "./ApChip";
import { ApIcon } from "..";
import styles from "./ApChip.module.scss";

interface ChipIconsProps {
  icons?: ActionIconsProps;
  rippleControl: React.Dispatch<React.SetStateAction<boolean>>;
  unmount?: boolean;
  hover?: boolean;
  style?: object;
}

const ChipIcons: FC<ChipIconsProps> = ({ icons, rippleControl, unmount = false, hover = false, style = {} }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setHoveredIndex(null);
  }, [icons]);

  if (!icons || unmount) return null;
  return (
    <div
      className={clsx(styles.actionWrapper, {
        [styles.hoverWrapper]: hover,
      })}
      style={style}
    >
      {icons?.icons?.map((eachIcon, index) => (
        <ApIcon
          key={index}
          icon={hoveredIndex === index && icons?.hovers?.[hoveredIndex] ? icons?.hovers?.[hoveredIndex] : eachIcon}
          size={typeof icons.sizes === "number" ? icons.sizes : icons?.sizes?.[index]}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={(event: any) => {
            event.stopPropagation();
            rippleControl(true);
            icons?.actions?.[index]();
            setTimeout(() => rippleControl(false));
          }}
        />
      ))}
    </div>
  );
};

export default ChipIcons;
