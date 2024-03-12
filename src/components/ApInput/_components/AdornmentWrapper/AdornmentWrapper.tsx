import { FC } from "react";
import clsx from "clsx";
import Adornment, { AdornmentProps } from "./Adornment";
import ClassNameProps from "../../_interface/ClassNameProps";
import styles from "./Adornment.module.scss";

interface AdornmentWrapperProps {
  children: React.ReactNode;
  startAdornment?: AdornmentProps;
  endAdornment?: AdornmentProps;
  startAdornmentStyle?: object;
  endAdornmentStyle?: object;
  className?: ClassNameProps;
}

const AdornmentWrapper: FC<AdornmentWrapperProps> = ({
  children,
  startAdornment,
  endAdornment,
  startAdornmentStyle = {},
  endAdornmentStyle = {},
  className,
}) => {
  if (!startAdornment && !endAdornment) return children;
  return (
    <div className={styles.wrapper}>
      {startAdornment && (
        <div
          className={clsx(
            styles.startAdornment,
            className?.startAdornment,
            startAdornment.onClick && styles.clickable,
          )}
          style={startAdornmentStyle}
        >
          {typeof startAdornment === "object" ? (
            <Adornment clickable={startAdornment.onClick} {...startAdornment} />
          ) : (
            startAdornment
          )}
        </div>
      )}
      {children}
      {endAdornment && (
        <div
          className={clsx(styles.endAdornment, className?.endAdornment, endAdornment.onClick && styles.clickable)}
          style={endAdornmentStyle}
        >
          {typeof endAdornment === "object" ? (
            <Adornment clickable={endAdornment.onClick} {...endAdornment} />
          ) : (
            endAdornment
          )}
        </div>
      )}
    </div>
  );
};

export default AdornmentWrapper;
