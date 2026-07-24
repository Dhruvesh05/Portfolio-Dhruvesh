"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "icon" | "sm" | "lg";
}

const buttonVariants = ({
  variant = "default",
  size = "default",
}: {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
} = {}) => {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

  const variants: Record<string, string> = {
    default: "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black",
    ghost:
      "hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white",
    outline:
      "border border-black/25 dark:border-white/25 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
  };

  const sizes: Record<string, string> = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return cn(base, variants[variant ?? "default"], sizes[size ?? "default"]);
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
