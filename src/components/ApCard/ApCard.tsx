import { Paper } from "@mui/material";
import clsx from "clsx";
import { FC } from "react";
import styles from "./ApCard.module.scss";

interface ApCardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const ApCard: FC<ApCardProps> = ({ children, className, ...restProps }) => {
  return (
    <Paper className={clsx(styles.apCardStyles, className)} {...restProps}>
      {children}
    </Paper>
  );
};

export default ApCard;
