import React from "react";
import { Separator } from "../ui/separator";

interface DividerProps {
  text?: string;
  h?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ text, h = "0.5", className }) => {
  return text ? (
    <div className={className}>
      <div className={`flex w-full flex-row items-center`}>
        <div className={`flex-grow bg-gray-300 h-${h}`} />
        <p className="text-[12px] text-[#363848] px-4">{text}</p>
        <div className={`flex-grow bg-gray-300 h-${h}`} />
      </div>
    </div>
  ) : (
    <Separator className={className} />
  );
};

export default Divider;
