"use client";

import { FC, useRef } from "react";
import { themes } from "@/utils/themes";
import CustomScrollbar from "./CustomScrollbar";

interface AppScrollbarProps {
  maxWidth?: string;
  maxHeight?: string;
  hidden?: boolean;
  hideHorizontal?: boolean;
  hideVertical?: boolean;
  size?: number;
  color?: string;
  style?: object;
  children?: React.ReactNode;
  [key: string]: any;
}

const AppScrollbar: FC<AppScrollbarProps> = ({
  maxWidth = "100vw",
  maxHeight = "100vh",
  hidden,
  hideHorizontal,
  hideVertical,
  size = 6,
  color = themes.color.primaryDark,
  style,
  children,
  ...restProps
}) => {
  const scrollbarRef = useRef(null);

  return (
    <CustomScrollbar
      ref={scrollbarRef}
      style={{
        overflowX: hideHorizontal ? "hidden" : "scroll",
        overflowY: hideVertical ? "hidden" : "scroll",
        maxWidth,
        maxHeight,
        ...style,
      }}
      display={hidden ? "none" : "unset"}
      size={size}
      color={color}
      {...restProps}
    >
      {children}
    </CustomScrollbar>
  );
};

export default AppScrollbar;
