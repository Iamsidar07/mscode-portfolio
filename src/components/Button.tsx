import { ReactNode } from "react";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  icon?: ReactNode;
}
const Button = ({ title, icon, ...otherprops }: ButtonProps) => {
  return (
    <button
      className="flex items-center justify-center gap-1  px-7 py-2.5 rounded-lg bg-[#0E1D2B] hover:brightness-125 hover:rounded-full transition-all w-full md:max-w-[15rem] disabled:opacity-80"
      {...otherprops}
    >
      {title}
      {icon ? icon : null}
    </button>
  );
};

export default Button;
