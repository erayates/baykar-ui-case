import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "contained";
  color?: "primary" | "secondary";
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
    "font-semibold w-fit leading-6 rounded-lg rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    outlined: {
      primary:
        "border-2 border-primary text-primary hover:bg-primary focus:ring-primary",
      secondary:
        "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary",
    },
    contained: {
      primary:
        "bg-primary text-white hover:bg-primary/70 focus:ring-primary/50",
      secondary:
        "bg-secondary text-white hover:bg-secondary/70 focus:ring-secondary/50",
    },
  };

  const sizeStyles = {
    small: "p-3 text-sm",
    medium: "px-4 py-2 text-md",
    large: "py-5 px-6 text-lg",
  };

  const buttonStyles = cn(
    baseStyles,
    variantStyles[variant][color],
    sizeStyles[size],
    className
  );

  return (
    <button className={buttonStyles} {...props}>
      <span className="px-4 font-medium">{children}</span>
    </button>
  );
};

export default Button;
