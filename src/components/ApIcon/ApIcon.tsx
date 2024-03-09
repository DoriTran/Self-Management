import { themes } from "@/utils/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useMemo } from "react";

interface ApIconProps {
  icon?: any; // For font awesome icons
  Icon?: FC<any>; // For mui material icons
  color?: string;
  size: number;
  fixedWidth?: boolean;
  [key: string]: any;
}

const ApIcon: FC<ApIconProps> = ({ icon, Icon, color = "black", size, fixedWidth = true, ...restProps }) => {
  const iconColor = useMemo(() => {
    return themes.color[color] ? themes.color[color] : color;
  }, []);

  if (!size) return null;
  return (
    <>
      {icon && <FontAwesomeIcon icon={icon} fontSize={size} color={iconColor} fixedWidth={fixedWidth} {...restProps} />}
      {Icon && <Icon sx={{ fontSize: size, color: iconColor }} {...restProps} />}
    </>
  );
};

export default ApIcon;
