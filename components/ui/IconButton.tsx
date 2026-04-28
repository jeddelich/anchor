import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function IconButton({
  children,
  className = "",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full p-2 text-text transition-colors duration-200 hover:cursor-pointer hover:bg-primary/10 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}