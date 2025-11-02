import type { ReactNode, ButtonHTMLAttributes } from "react";
import { generalYellow } from "../../utility";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  type = "button",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      type={type}
      style={{ backgroundColor: generalYellow }}
      className={`py-2 px-8 font-medium cursor-pointer w-[170px] flex justify-center items-center  text-base hover:scale-[1.05] active:scale-[1] transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
