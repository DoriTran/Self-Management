import clsx from "clsx";
import { FC } from "react";
import styles from "./LabelWrapper.module.scss";
import ClassNameProps from "../../_interface/ClassNameProps";

interface LabelWrapperProps {
  children: React.ReactNode;
  label?: string;
  style?: object;
  className?: ClassNameProps;
}

const LabelWrapper: FC<LabelWrapperProps> = ({ children, label, style = {}, className }) => {
  if (!label) return children;
  return (
    <div className={styles.container}>
      <div style={style} className={clsx(styles.label, className?.label)}>
        {label}
      </div>
      {children}
    </div>
  );
};

LabelWrapper.displayName = "Label";
export default LabelWrapper;
