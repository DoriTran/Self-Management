import clsx from "clsx";
import { FC, useMemo } from "react";
import styles from "./LabelWrapper.module.scss";
import ClassNameProps from "../../_interface/ClassNameProps";

interface LabelWrapperProps {
  children: React.ReactNode;
  label?: string;
  style?: object;
  width: string | number;
  className?: ClassNameProps;
}

const LabelWrapper: FC<LabelWrapperProps> = ({ children, label, style = {}, width, className }) => {
  const trueWidth = useMemo<string | number>(() => {
    if (typeof width === "string" && width.includes("%")) return "100%";
    return width;
  }, [width]);

  if (!label) return children;
  return (
    <div className={styles.container} style={{ width: trueWidth }}>
      <div style={style} className={clsx(styles.label, className?.label)}>
        {label}
      </div>
      {children}
    </div>
  );
};

LabelWrapper.displayName = "Label";
export default LabelWrapper;
