import React, { FC, useState } from "react";
import { ApScrollbar } from "@/components";
import { Menu, MenuItem, Fade, PopoverOrigin } from "@mui/material";
import styles from "./ApFlyout.module.scss";

interface FlyoutStyle {
  menu: object;
  option: object;
  children: object;
  [key: string]: any;
}

interface ApFlyoutProps {
  anchor: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  anchorOrigin: PopoverOrigin;
  transformOrigin: PopoverOrigin;

  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  style?: FlyoutStyle;
  maxHeight?: string;
  autoFocus?: boolean;
  selected?: number;

  onOpen: (event: any) => void;
  onClose: () => void;

  noOptionToShowText?: string;
  options?: (string | number)[];

  disabled?: boolean;
  noUnmountWhenClose?: boolean;

  children?: React.ReactNode;
}

const ApFlyout: FC<ApFlyoutProps> = ({
  anchor,
  anchorOrigin = {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin = {
    vertical: "top",
    horizontal: "left",
  },
  isOpen,
  setIsOpen,
  style,
  maxHeight = "75vh",
  autoFocus = false,
  selected,
  onOpen,
  onClose,

  noOptionToShowText = "No Options to show",
  options,
  disabled,
  noUnmountWhenClose,
  children,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    onOpen?.(event);
    setIsOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    if (disabled) return;
    onClose?.();
    setIsOpen?.(false);
  };

  return (
    <>
      {React.cloneElement(anchor, {
        onClick: handleOpen,
        style: { cursor: "pointer" },
      })}
      {anchorEl && (
        <Menu
          MenuListProps={{
            "aria-labelledby": "fade-button",
            sx: style?.menu,
          }}
          autoFocus={autoFocus}
          anchorEl={anchorEl}
          open={noUnmountWhenClose || isOpen}
          onClose={handleClose}
          TransitionComponent={Fade}
          anchorOrigin={anchorOrigin}
          transformOrigin={transformOrigin}
          sx={{ ...(noUnmountWhenClose && !isOpen && { display: "none" }), ...style }}
          disableAutoFocusItem
        >
          <ApScrollbar
            hidden
            maxHeight={maxHeight}
            onKeyDown={(event: React.KeyboardEvent) => event.stopPropagation()}
          >
            <div style={style?.children}>{children}</div>
            {options?.length === 0 && <div className={styles.noOptionToShow}>{noOptionToShowText}</div>}
            {options?.map((eachItem: any, index: number) => (
              <MenuItem
                key={eachItem}
                onClick={() => setAnchorEl(null)}
                selected={index === selected}
                sx={style?.option}
              >
                {eachItem}
              </MenuItem>
            ))}
          </ApScrollbar>
        </Menu>
      )}
    </>
  );
};

export default ApFlyout;
