import React from "react";
import { Info } from "lucide-react";

interface OrangeButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export function OrangeButton({ text, icon, className = "" }: OrangeButtonProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
        {icon ? icon : <Info className="text-white w-5 h-5" />}
      </div>
      <span className="text-gray-900 font-medium">{text}</span>
    </div>
  );
}
