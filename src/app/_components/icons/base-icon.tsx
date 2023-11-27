import { SVGAttributes } from "react";
import { SvgIcon } from "./icon.type";

export const BaseIcon: React.FC<SvgIcon> = ({
  width = 24,
  height = 24,
  color = "currentColor",
  strokeWidth = "1.5",
  viewBox = "0 0 24 24",
  children,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox={viewBox}
      color={color}
      {...rest}
    >
      {children}
    </svg>
  );
};
