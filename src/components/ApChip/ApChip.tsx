import { Chip } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { themes } from "@/utils/themes";
import { ApIcon } from "..";
import ChipIcons from "./ChipIcons";
import styles from "./ApChip.module.scss";

interface IconProps {
  icon?: any;
  Icon?: FC<any>;
  size?: number;
}

export interface ActionIconsProps {
  icons?: any[];
  hovers?: any[];
  actions?: ((...args: any[]) => any)[];
  sizes?: number[];
}

interface ApChipStyles {
  label: object;
  [key: string]: any;
}

interface ApChipProps {
  icon?: IconProps;
  endIcons?: ActionIconsProps;
  hoverIcons?: ActionIconsProps;
  label?: string;
  onClick?: (event: any) => void;
  onDoubleClick?: (event: any) => void;
  onRightClick?: (event: any) => void;
  onMouseEnter?: (event: any) => void;
  onMouseLeave?: (event: any) => void;
  style?: ApChipStyles;
  fullWidth?: boolean;
  [key: string]: any;
}

const ApChip: FC<ApChipProps> = ({
  icon,
  endIcons,
  hoverIcons,
  label,
  onClick,
  onDoubleClick,
  onRightClick,
  onMouseEnter,
  onMouseLeave,
  style = {},
  fullWidth = "false",
  ...restProps
}) => {
  const [disableRipple, setDisableRipple] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  // Chip handlers
  const handleLeftClick = (event: any) => onClick?.(event);
  const handleRightClick = (event: any) => {
    event.preventDefault();
    onRightClick?.(event);
  };
  const handleMouseEnter = (event: any) => {
    onMouseEnter?.(event);
    setHover(true);
  };
  const handleMouseLeave = (event: any) => {
    onMouseLeave?.(event);
    setHover(false);
  };

  useEffect(() => {
    setHover(false);
  }, [endIcons, hoverIcons]);

  return (
    <Chip
      variant="outlined"
      color="primary"
      icon={icon && <ApIcon icon={icon.icon} Icon={icon.Icon} size={icon.size} />}
      onClick={handleLeftClick}
      onDoubleClick={onDoubleClick}
      onContextMenu={handleRightClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...{ disableRipple }}
      label={
        <>
          <div
            className={styles.chipContainer}
            style={{ ...style?.label, width: fullWidth ? "100%" : "fit-content" }}
          >
            {label && <div className={styles.labelWrapper}>{label}</div>}
            <ChipIcons icons={endIcons} rippleControl={setDisableRipple} unmount={hoverIcons && hover} />
          </div>
          <ChipIcons
            hover
            icons={hoverIcons}
            rippleControl={setDisableRipple}
            style={{
              minWidth: hover ? "29px" : 0,
              width: hover ? "auto" : 0,
              opacity: hover ? 1 : 0,
            }}
          />
        </>
      }
      sx={{
        position: "relative",
        backgroundColor: themes.color.priWhite,
        border: `1px solid ${themes.color.primaryDark}`,
        color: themes.color.primaryDark,
        height: "30px",
        paddingLeft: icon ? "4px" : 0,
        minWidth: "30px",
        maxWidth: "46vw",
        ".MuiChip-label": {
          padding: icon ? "0 3px 0 12px" : "0 6px",
          width: "100%",
        },
        "&.MuiButtonBase-root.Mui-focusVisible": {
          backgroundColor: themes.color.secondary,
        },

        "&&:hover": {
          backgroundColor: themes.color.secondary,
        },
      }}
      {...restProps}
    />
  );
};

export default ApChip;
