import React from "react";
import "./button.styles.scss";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary_inverted"
    | "primary"
    | "destructive"
    | "secondary"
    | "ghost"
    | "link"
    | "dark"
    | "gold";
  size?: "lg" | "md" | "sm";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const variantClass = variant ? `btn-${variant}` : "";
    const sizeClass = size ? `btn-${size}` : "";

    return (
      <button
        className={`${variantClass} ${sizeClass} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
