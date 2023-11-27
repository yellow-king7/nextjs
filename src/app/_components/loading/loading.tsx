import classNames from "classnames";
import { LoadingProps } from "./loading.types";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

export const Loading: React.FC<LoadingProps> = ({
  type = "spinner",
  className,
  variant,
  size = "normal",
}: LoadingProps) => {
  const classes = classNames(
    "loading",
    className,
    { [`loading-${type}`]: type },
    { [`loading-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size }
  );
  return <span className={classes}></span>;
};
