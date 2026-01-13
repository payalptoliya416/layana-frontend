import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function CommonButton({ children, className = "" }: Props) {
  return (
    <button
      className={`
        border border-black
        px-[50px] py-[23px]
        font-mulish text-[12px] leading-[14px]
        tracking-[0.15em] uppercase
        transition
        hover:bg-black hover:text-white cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
}