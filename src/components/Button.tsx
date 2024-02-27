import { ReactNode } from "react";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  icon?: ReactNode;
}
const Button = ({ title, icon, ...otherprops }: ButtonProps) => {
  return (
    <button
      {...otherprops}
      className=" flex items-center justify-center gap-1 btn border px-6 py-3 rounded-full tracking-wider bg-[#fa8000] text-white font-medium  border-[#fa8000] hover:border-cyan-500 hover:bg-transparent hover:text-cyan-500 hover:rounded-full transition-all duration-200 ease-linear group"
    >
      {title}
      {icon ? icon : null}
    </button>
  );
};

export default Button;

