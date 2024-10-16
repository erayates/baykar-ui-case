import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "contained" | "transparent";
  color?: "primary" | "secondary" | "white";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "contained",
  color = "primary",
  size = "medium",
  ...props
}) => {
  const baseStyles =
    "font-semibold h-fit w-fit leading-6 rounded-lg rounded-md transition-colors duration-200 focus:outline-none";

  const variantStyles = {
    outlined: {
      primary:
        "border-2 border-primary text-primary hover:bg-primary focus:ring-primary",
      secondary:
        "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary",
      white:
        "border-2 border-white text-white hover:bg-white hover:text-primary",
    },
    contained: {
      primary: "bg-primary text-white focus:ring-primary",
      secondary: "bg-secondary text-white focus:ring-secondary",
      white: "bg-white text-primary focus:ring-primary",
    },
    transparent: {
      primary: "text-primary",
      secondary: "text-secondary ",
      white: "text-white",
    },
  };

  const sizeStyles = {
    small: "py-2 px-[28px] text-sm",
    medium: "py-3 px-4 md:px-[28px] text-lg",
    large: "py-3 px-[48px] text-[24px]",
  };

  const buttonStyles = cn(
    baseStyles,
    variantStyles[variant][color],
    sizeStyles[size],
    className
  );

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
