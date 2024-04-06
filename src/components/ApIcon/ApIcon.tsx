import { IconData } from "@/data/icon";
import iconByString from "@/utils/iconByString";
import { themes } from "@/utils/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useMemo } from "react";

interface ApIconProps {
  icon?: any; // For font awesome icons
  Icon?: FC<any>; // For mui material icons
  dcon?: IconData; // For font awesome icons using data string
  color?: string;
  size?: number;
  fixedWidth?: boolean;
  sx?: object;
  [key: string]: any;
}

const ApIcon: FC<ApIconProps> = ({
  icon,
  Icon,
  dcon,
  color = "black",
  size = 25,
  fixedWidth = true,
  sx,
  ...restProps
}) => {
  const iconColor = useMemo(() => {
    return themes.color[color] ? themes.color[color] : color;
  }, [color]);

  return (
    <>
      {dcon && (
        <FontAwesomeIcon
          icon={iconByString(dcon)}
          fontSize={size}
          color={iconColor}
          fixedWidth={fixedWidth}
          {...restProps}
        />
      )}
      {icon && (
        <FontAwesomeIcon icon={icon} fontSize={size} color={iconColor} fixedWidth={fixedWidth} {...restProps} />
      )}
      {Icon && <Icon sx={{ fontSize: size, color: iconColor, ...sx }} {...restProps} />}
    </>
  );
};

export default ApIcon;
